import { Bell } from "lucide-react";
import React from "react";

const Notifications = () => {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full cursor-pointer">
      <Bell size={22} />
    </button>
  );
};

export default Notifications;
