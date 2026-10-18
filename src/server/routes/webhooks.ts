import { Hono } from "hono";
import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/backend";
import { db } from "@/prisma/prismaDB";

const webhooks = new Hono();

webhooks.post("/clerk", async (c) => {
  // fetching the webhook secret code
  const WEBHOOK_SECRET =
    process.env.NODE_ENV === "production"
      ? process.env.CLERK_WEBHOOK_PRODUCTION_SECRET
      : process.env.CLERK_WEBHOOK_DEVELOPMENT_SECRET;

  if (!WEBHOOK_SECRET) {
    return c.text("Missing webhook secret from environment variables", 500);
  }

  // mandatory svix security headers
  const svix_id = c.req.header("svix-id");
  const svix_timestamp = c.req.header("svix-timestamp");
  const svix_signature = c.req.header("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return c.text("Error: Missing svix headers", 400);
  }

  const payload = await c.req.text();

  // create a new webhook
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  // verifying the webhook and making sure the payload is valid and not sent by a third party
  try {
    wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });

    evt = JSON.parse(payload) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return c.text("Error: Verification failed", 400);
  }

  // checking the event type
  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses, first_name, last_name, username, image_url } =
      evt.data;
    const primaryEmail = email_addresses?.[0]?.email_address;

    // the actual database insertion
    try {
      await db.user.create({
        data: {
          clerkUserId: id,
          username: String(username),
          email: primaryEmail,
          firstName: first_name,
          lastName: last_name,
          avatarUrl: image_url ? image_url : null,
        },
      });
    } catch (dbError) {
      console.error("Database insertion failed:", dbError);
      return c.text("Internal Database Error", 500);
    }

    return c.text("Webhook processed successfully", 200);
  }
});

export default webhooks;
