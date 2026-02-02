import {label} from "motion/react-client";
import Link from "next/link";

export default function Home() {
  return (
    <div className='h-screen flex flex-col p-8 max-w-5xl mx-auto bg-neutral-950'>
      <div className='flex gap-4'>
        {links.map((link) => {
          return (
            <Link
              key={link.label}
              href={link.href}
              className='px-3 py-2 text-sm rounded-xl bg-neutral-50 '>
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const links = [
  {
    label: "Transformation Animation",
    href: "/transformation-animation",
  },
  {
    label: "Transition Animation",
    href: "/transition-animation",
  },
  {
    label: "Keyframes Animation",
    href: "/keyframes-animation",
  },
  {
    label: "Variants Animation",
    href: "/variants-animation",
  },
  {
    label: "Gesture Animation",
    href: "/gesture-animation",
  },
];
