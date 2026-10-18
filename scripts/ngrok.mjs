import { config } from "dotenv";
import ngrok from "@ngrok/ngrok";

config({ path: [".env.local", ".env"] });

if (!process.env.NGROK_AUTHTOKEN) {
  throw new Error("NGROK_AUTHTOKEN is missing from .env.local or .env");
}

const port = process.env.NGROK_FORWARD_PORT ?? process.env.PORT ?? "3000";
const forwarder = await ngrok.forward({
  addr: `localhost:${port}`,
  authtoken_from_env: true,
  domain: "applaud-stool-liability.ngrok-free.dev",
});

console.log(`Available at: ${forwarder.url()}`);
process.stdin.resume();
