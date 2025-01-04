'use client'

import React from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

const Test = () => {
    return (
      <div >
        <div className='pt-[100vh]'></div>
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} className='w-full h-full text-white'>
          <h1>Hello World</h1>
        </motion.div>
        <div className='pt-[100vh]'></div>

      </div>
    );
}

export default Test;