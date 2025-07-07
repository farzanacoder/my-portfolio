import React, { useEffect, useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { ImHtmlFive } from 'react-icons/im';
import { TbBrandJavascript } from 'react-icons/tb';
import Container from '../components/Container';
import Flex from '../components/Flex';

const statsData = [
  { icon: <ImHtmlFive size={30} className="text-black" />, number: 12, label: "Html" },
  { icon: <TbBrandJavascript size={40} className="text-black" />, number: 5, label: "Javascript" },
  { icon: <FaReact size={40} className="text-black" />, number: 3, label: "React" },
];

const CounterBox = ({ icon, number, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev < number ? prev + 1 : 0));
    }, 1000); // 1000ms = 1 second

    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="shadow-2xl bg-white rounded-2xl px-32 py-6  text-center hover:scale-105 duration-300">
      <div className="mb-3">{icon}</div>
      <h2 className="text-3xl font-bold text-gray-800">{count}</h2>
      <p className="text-sublight text-xl mt-1">{label}</p>
    </div>
  );
};

const ProjectCounter = () => {
  return (
    <section className='bg-light pt-20'>
        <Container>
        <Flex className="py-10 px-4 justify-between gap-6">
      {statsData.map((item, index) => (
        <CounterBox key={index} {...item} />
      ))}
    </Flex>
    </Container>
    </section>
  );
};

export default ProjectCounter;
