import { Bell } from "lucide-react";
import React from "react";

const Notifications = () => {
  return (
    <button className="flex p-2 items-center justify-center cursor-pointer mt-1">
      <Bell size={24} />
    </button>
  );
};

export default Notifications;
