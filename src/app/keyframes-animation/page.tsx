import {delay} from "motion";
import * as motion from "motion/react-client";

export default function KeyframesAnimation() {
  return (
    <div className='h-screen flex flex-col gap-16 px-32 pt-8 max-w-5xl mx-auto bg-neutral-950'>
      <motion.div
        animate={{x: [0, 400, 0, 400, 0]}}
        transition={{delay: 1, duration: 4, ease: "easeInOut"}}
        className='bg-yellow-300 size-24'
      />
      <motion.div
        animate={{borderRadius: ["0%", "50%", "0%", "50%", "0%"]}}
        transition={{delay: 1, duration: 4, ease: "easeInOut"}}
        className='bg-yellow-300 size-24'
      />
      <motion.div
        animate={{scale: [1, 0.8, 1.2, 0.8, 1]}}
        transition={{delay: 1, duration: 4, ease: "easeInOut"}}
        className='bg-yellow-300 size-24 mt-8'
      />
      <motion.div
        animate={{rotate: [0, 180, 0, -180, 0, 180]}}
        transition={{delay: 1, duration: 8, ease: "linear"}}
        className='bg-yellow-300 size-24 mt-8'
      />
      <motion.div
        animate={{skewX: [0, 45, 0, -45, 0]}}
        transition={{delay: 1, duration: 8, ease: "linear"}}
        className='bg-yellow-300 size-24 mt-8'
      />
    </div>
  );
}
