import React from "react";
import Button from "../components/Button";

const About = () => {


  return (
    <section className="bg-white text-black py-16 px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">About Me</h2>
        <p className="text-center text-gray-500 mb-10">My introduction</p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
         
          <div className="rounded-xl overflow-hidden w-64 h-64">
            <img src="" alt="" />
          </div>

          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-6">
              <div className="bg-gray-100 p-4 rounded-xl shadow-md w-28">
                <p className="font-semibold text-sm">Experience</p>
                <p className="text-xs text-gray-500">8+ Years</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl shadow-md w-28">
                <p className="font-semibold text-sm">Completed</p>
                <p className="text-xs text-gray-500">48+ Projects</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl shadow-md w-28">
                <p className="font-semibold text-sm">Support</p>
                <p className="text-xs text-gray-500">Online 24/7</p>
              </div>
            </div>

           
            <p className="max-w-md text-sm text-gray-700">
              Frontend developer, I create web pages with UI / UX user interface,
              I have years of experience and many clients are happy with the
              projects carried out.
            </p>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About