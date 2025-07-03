import React from "react";
import { MessageCircle } from "lucide-react";

const Chaticon = () => {
  return (
    <div className="fixed cursor-pointer bottom-4 right-4 flex items-center space-x-2 z-10">
      <div className="bg-white px-2 py-2 rounded-full shadow-xl text-sm font-medium">
        Chat with Me <span className="ml-1">👋</span>
      </div>
      <button className="bg-drk p-3 rounded-full shadow-xl text-white hover:bg-sublight duration-500">
        <MessageCircle size={25} />
      </button>
    </div>
  );
};

export default Chaticon;
