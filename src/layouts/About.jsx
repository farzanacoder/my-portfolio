import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Flex from "../components/Flex";
import Container from "../components/Container";
import Paratext from "../components/Paratext";
import CV from "../assets/Resume (FARJANA AKTER).pdf";
import { PiReadCvLogoFill } from "react-icons/pi";

const About = () => {


  return (
    <section id="about" className="bg-light text-black py-16 px-4 md:px-20">
      <Container>
        <Flex>
        <div className="w-5/12">dgfjhkjkljuy</div>

        <div className="max-w-5xl mx-auto w-7/12">
        <div className="mr-124">
          <Heading text='About Me'/>
        <SubHeading className='' text='My introduction'/>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">

          <div className="rounded-xl overflow-hidden w-64 h-64">
            <img src="" alt="" />
          </div>

          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-6">
              <div className="bg-light p-10 rounded-xl shadow-md w-56">
                <p className="font-semibold text-sm">Experience</p>
                <p className="text-xs text-sublight">8+ Years</p>
              </div>
              <div className="bg-light p-10 rounded-xl shadow-md w-56">
                <p className="font-semibold text-sm">Completed</p>
                <p className="text-xs text-sublight">48+ Projects</p>
              </div>
              <div className="bg-light p-10 rounded-xl shadow-md w-56">
                <p className="font-semibold text-sm">Support</p>
                <p className="text-xs text-gray-500">Online 24/7</p>
              </div>
            </div>


            <Paratext text='Frontend developer, I create web pages with UI / UX user interface,
              I have years of experience and many clients are happy with the
              projects carried out.'/>
          <a download='' href={CV}><Button btnTxt='Download CV' /></a>

          </div>
        </div>
      </div>
      </Flex>
      </Container>
    </section>
  );
};

export default About