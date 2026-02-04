import * as motion from "motion/react-client";

const parentVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function StaggerAnimation() {
  return (
    <div className='h-screen flex justify-center items-center gap-8 px-32 py-8 max-w-5xl mx-auto bg-neutral-950'>
      <motion.div
        variants={parentVariants}
        initial='hidden'
        animate='visible'
        className='flex gap-4'>
        {[...Array(5)].map((_, index) => (
          <motion.div
            variants={childVariants}
            key={index}
            className='bg-yellow-300 size-16 rounded-full'
          />
        ))}
      </motion.div>
    </div>
  );
}
