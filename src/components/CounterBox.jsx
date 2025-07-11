import React, { useEffect, useState } from 'react'
import Flex from './Flex';

const CounterBox = ({ icon, number, label, className }) => {

    let [currentCount, SetcurrentCount] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            SetcurrentCount((prev) => (prev < number ? prev + 1 : 0));
        }, 1000)

        return () => clearInterval(interval)
    }, [number]);

    return (
        <Flex className={`shadow-2xl w-72 h-40 justify-center items-center flex-col bg-white rounded-2xl text-center hover:scale-105 duration-300 ${className}`}>
            <div className={`mb-3 text-4xl ${className}`}>{icon}</div>
            <h2 className={`text-3xl font-bold ${className}`}>{currentCount}<span className='text-2xl font-semibold'>+</span></h2>
            <p className={`text-xl mt-1 ${className}`}>{label}</p>
        </Flex>
    )
}

export default CounterBox