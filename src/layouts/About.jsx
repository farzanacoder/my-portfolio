import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Flex from "../components/Flex";
import Container from "../components/Container";
import Paratext from "../components/Paratext";
import CV from "../assets/Resume (FARJANA AKTER).pdf";
import { PiReadCvLogoFill } from "react-icons/pi";
import Image from "../components/Image";
import AboutMe from "../assets/aboutMe.jpg";

const About = () => {


  return (
    <section id="about" className="bg-light text-black py-16 px-4 md:px-20">

      <Container>
      <div className="text-center pb-10">
        <Heading className='lg:text-4xl text-[23px]' text='About Me' />
        <SubHeading className='!text-sm lg:!text-xl' text='My introduction' />
      </div>

        <Flex className='flex-col lg:flex-row'>
          <div className="w-5/12 mb-10 lg:mb-0 ml-2 lg:ml-0">
            <Image src={AboutMe} className='lg:!max-w-md !max-w-[270px] rounded-2xl' />
          </div>

          <div className="max-w-5xl mx-auto w-7/12">

            <div className="flex flex-col md:flex-row items-center justify-center gap-10">

              <div className="flex flex-col gap-6 text-center md:text-left">

                <div className="flex flex-col lg:flex-row ml-0 items-center justify-center md:justify-start gap-6">

                  <div className="bg-white p-10 rounded-xl shadow-md w-48">
                    <p className="font-semibold text-md">Experience</p>
                    <p className="text-sm text-sublight">1+ Years</p>
                  </div>
                  <div className="bg-white p-10 rounded-xl shadow-md w-48">
                    <p className="font-semibold text-md">Completed</p>
                    <p className="text-sm text-sublight">20+ Projects</p>
                  </div>
                  <div className="bg-white p-10 rounded-xl shadow-md w-48">
                    <p className="font-semibold text-md">Support</p>
                    <p className="text-sm text-gray-500">Online 24/7</p>
                  </div>

                </div>


                <Paratext className=' !w-full lg:w-xl' text='Frontend developer, I create web pages with UI / UX user interface,
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