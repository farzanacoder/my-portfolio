import React, { useEffect, useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { ImHtmlFive2 } from 'react-icons/im';
import { TbBrandJavascript } from 'react-icons/tb';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import CounterBox from '../components/CounterBox';


const ProjectCounter = () => {
  return (
    <section className='bg-light pt-20'>
      <Container>
        <Heading text='Total Works' />
        <SubHeading text='As a dedicated developer, I strive to write clean code, solve real-world problems, and deliver impactful digital solutions.' />
        <Flex className="py-10 px-2 lg:flex-row flex-col justify-center items-center gap-10">
          <CounterBox icon={<ImHtmlFive2 />} number='12' label='Html' />
          <CounterBox icon={<TbBrandJavascript />} number='5' label='Javascript' />
          <CounterBox icon={<FaReact />} number='4' label='React' />
        </Flex>
      </Container>
    </section>
  );
};

export default ProjectCounter;
