import React from 'react';
import List from '../components/List';
import { Link } from 'react-router-dom';
import Flex from '../components/Flex';
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiFacebook } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white font-poppins">
      <footer className="text-center pt-10 pb-6">
            <a href="index.html" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold italic" >Farjana</a>
        <Flex className=" justify-center gap-6 my-8">
          <Link state={{scrollTo:'about'}}>
                  <List text='About' />
                </Link>
                <Link state={{scrollTo:'skills'}}>
                  <List text='Skills' />
                </Link>
                <Link state={{scrollTo:'services'}}>
                  <List text='Services' />
                </Link>
                <Link state={{scrollTo:'project'}}>
                  <List text='Project' />
                </Link>
        </Flex>
        <Flex className="pb-10 justify-center gap-6 mb-4">
          <a href="https://github.com/farzanacoder"><FaGithub className='text-2xl hover:text-paralight duration-500' /></a>
          <a href="https://www.linkedin.com/in/farzana-islam-b5a478339/"><FaLinkedin className='text-2xl hover:text-paralight duration-500' /></a>
          <a href="https://www.facebook.com/farzana.coder"><SiFacebook className='text-2xl hover:text-paralight duration-500' /></a>
          <a href="https://wa.me/8801869214651"><IoLogoWhatsapp className='text-2xl hover:text-paralight duration-500' /></a>
        </Flex>
        <p className="text-md">© farzanacoder. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
