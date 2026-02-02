import * as motion from "motion/react-client";

export default function TransitionAnimation() {
  return (
    <div className='h-screen flex flex-col gap-16 px-32 pt-8 max-w-5xl mx-auto bg-neutral-950'>
      <motion.div animate={{x: 400}} className='size-24 rounded-full bg-yellow-400'></motion.div>
      <motion.div animate={{rotate: 180}} className='size-24  bg-yellow-400'></motion.div>
      <motion.div animate={{skewX: -45}} className='size-24  bg-yellow-400'></motion.div>
      <motion.div animate={{scale: 1.5}} className='size-24  bg-yellow-400'></motion.div>
    </div>
  );
}
