"use client";
import {AnimatePresence} from "motion/react";
import * as motion from "motion/react-client";
import {useState} from "react";

const variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    x: -400,
  },
};
export default function Page() {
  const [visible, setVisible] = useState(true);
  return (
    <div className='h-screen flex flex-col gap-16 px-32 pt-8 max-w-5xl mx-auto bg-neutral-950'>
      {/* <button
        onClick={() => setVisible(!visible)}
        className='bg-white rounded-md border w-fit px-4 py-2 border-neutral-300'>
        Toggle
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            key={1}
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className='py-2 w-96 px-4 rounded-md bg-yellow-300'>
            Hello world
          </motion.div>
        )}
      </AnimatePresence> */}

      <FlippedConatiner />
    </div>
  );
}

const FlippedConatiner = () => {
  const [flipped, setFlipped] = useState(false);

  const boxVariants = {
    initial: {
      rotateY: 0,
    },
    animate: {
      rotateY: 180,
    },
  };

  return (
    <motion.div className='perspective-normal' onClick={() => setFlipped(!flipped)}>
      <motion.div
        variants={boxVariants}
        initial='initial'
        animate={flipped ? "animate" : "initial"}
        transition={{duration: 0.4, ease: "easeInOut"}}
        className='w-48 h-32 relative'>
        <motion.div className='absolute flex items-center justify-center inset-0 bg-blue-400 rounded-md font-bold'>
          front side
        </motion.div>
        <motion.div className='absolute flex items-center justify-center inset-0 bg-white rounded-md font-bold rotate-y-180'>
          back side
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
