import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Container from '../components/Container';
import SubHeading from '../components/SubHeading';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import Button from '../components/Button';

export default function ContactMe() {
  return (
    <section id="contact" className="bg-light py-16">
      <Container>
        <div className="text-center mb-12">
            <Heading text='Contact Me'/>
          <SubHeading text='Have a project or just want to say hi? Fill out the form or reach out via info below.'/>
        </div>

        <Flex className='justify-evenly'>
          <div className="space-y-8">
            <Flex className=" items-start">
              <FiMail className="text-paralight text-2xl mt-1" />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-drk dark:text-white">Email</h4>
                <p className="text-drk">yourname@example.com</p>
            </div>
              </Flex>

            <div className="flex items-start">
              <FiPhone className="text-paralight text-2xl mt-1" />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-drk dark:text-white">Phone</h4>
                <p className="text-drk">+880 1234 567 890</p>
              </div>
            </div>

            <div className="flex items-start">
              <FiMapPin className="text-paralight text-2xl mt-1" />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-drk dark:text-white">Location</h4>
                <p className="text-drk">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10">
            <form className="space-y-6">
              <div>
                <label className="block text-drk mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-drk mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-drk mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your message..."
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <Button btnTxt='Send Nessage'/> 
            </form>
          </div>
        </Flex>
      </Container>
    </section>
  );
}
