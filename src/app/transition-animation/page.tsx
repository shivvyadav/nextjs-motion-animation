import * as motion from "motion/react-client";

export default function TransitionAnimation() {
  return (
    <div className='h-screen flex flex-col gap-16 px-32 pt-8 max-w-5xl mx-auto bg-neutral-950'>
      <motion.div
        initial={{x: 0}}
        animate={{x: 400}}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 1,
          type: "tween",
        }}
        className='size-24 bg-yellow-300'
      />
      <motion.div
        initial={{x: 0}}
        animate={{x: 400}}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 1,
          type: "spring",
        }}
        className='size-24 bg-yellow-300'
      />
      <motion.div
        initial={{x: 0}}
        animate={{x: 400}}
        transition={{
          duration: 2,
          ease: "anticipate",
          delay: 1,
          type: "tween",
        }}
        className='size-24 bg-yellow-300'
      />
      <motion.div
        initial={{x: 0}}
        animate={{x: 400}}
        transition={{
          duration: 2,
          ease: "anticipate",
          delay: 1,
          type: "spring",
        }}
        className='size-24 bg-yellow-300'
      />
    </div>
  );
}
