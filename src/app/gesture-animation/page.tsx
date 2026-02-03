import * as motion from "motion/react-client";

export default function GestureAnimation() {
  return (
    <div className='h-screen flex flex-col gap-16 px-32 pt-8 max-w-5xl mx-auto bg-neutral-950'>
      <motion.div whileHover={{scale: 1.05, rotate: 40}} className='size-24 bg-yellow-300 ' />
      <motion.div
        whileTap={{scale: 0.9, backgroundColor: "red"}}
        className='size-24 bg-yellow-300 '
      />
      <motion.div
        drag
        whileDrag={{scale: 1.1, backgroundColor: "red"}}
        dragConstraints={{top: 0, left: 0, right: 400, bottom: 200}}
        dragElastic={0.2}
        // dragSnapToOrigin
        className='size-24 bg-yellow-300 '
      />
    </div>
  );
}
