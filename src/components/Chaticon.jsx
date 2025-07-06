import React from "react";
import { MessageCircle } from "lucide-react";

const Chaticon = () => {
  return (
    <div className="fixed cursor-pointer bottom-4 right-4 flex items-center space-x-2 z-10">
      <div className="bg-white px-2 py-1 lg:px-6 lg:py-2.5 rounded-full shadow-xl text-[10px] lg:text-base font-medium">
        Chat with Me <span className="ml-1 text-[14px] lg:text-2xl">👋</span>
      </div>
      <button className="bg-drk p-2 lg:p-4 rounded-full shadow-xl text-white hover:bg-sublight duration-500">
        <MessageCircle lg:size={35} size={27} />
      </button>
    </div>
  );
};

export default Chaticon;
