import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Container from '../components/Container';
import SubHeading from '../components/SubHeading';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Label from '../components/Label';
import Msgbox from '../components/Msgbox';
import { MdMarkEmailUnread } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebookMessenger } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <section id="contact" className="bg-light pb-32 pt-10">
      <Container>
        <div className="text-center mb-10">
          <Heading text='Contact Me' />
          <SubHeading text='Have a project or just want to say hi? Fill out the form or reach out via info below.' />
        </div>

        <Flex className='lg:justify-evenly flex-col-reverse lg:flex-row mx-7'>

          <div className="space-y-6 lg:mt-0 mt-20">
            <Msgbox title='Email' mailTxt='farzanaashif10@gmail.com' Icon={MdMarkEmailUnread} link={'mailto:farzanaashif10@gmail.com'}/>
            <Msgbox title='WhatsApp' mailTxt='+8801869214651' Icon={IoLogoWhatsapp} link={'https://wa.me/8801869214651'}/>
            <Msgbox title='Messenger' mailTxt='farzana.coder' Icon={FaFacebookMessenger} link={"https://www.messenger.com/t/28187013384247189/"}/>
          </div>


          <div className="h-auto w-[260px] lg:w-[500px]">
            <form className="space-y-6">
              <Label text='Your Name' title='Name' />
              <Label text='you@gmail.com' title='Email' />
              <div>
                <label className="block text-drk mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your message..."
                  className="w-full lg:text-md text-[15px] px-5 py-3 rounded-xl border border-gray-300 bg-light focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <Button btnTxt='Send Nessage' />
            </form>
          </div>

        </Flex>
      </Container>
    </section>
  );
}
