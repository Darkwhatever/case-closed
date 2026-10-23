import { motion } from "framer-motion";
import type { HeaderIcon } from "@/src/interfaces/userInterfaces";
import Image from "next/image";

type Props = {
  user: HeaderIcon;
  isPending: boolean;
};
const UserIcon = ({ user, isPending }: Props) => {
  const { avatarUrl } = user;

  return (
    <motion.div>
      {isPending || !avatarUrl ? (
        <div className="flex w-10 h-10 bg-gray-700 rounded-full" />
      ) : (
        <button className="flex w-10 h-10 bg-gray-700 rounded-full cursor-pointer select-none">
          <Image
            src={avatarUrl}
            alt="User Icon"
            width={40}
            height={40}
            className="object-cover w-full h-full rounded-full"
          />
        </button>
      )}
    </motion.div>
  );
};

export default UserIcon;
