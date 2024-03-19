import Image from "next/image";
import Link from "next/link";
import { MotionHeader } from "../animated/MotionHeader";

function Header() {
  return (
    <MotionHeader
      initial={{ opacity: 0, y: -100}}
      animate={{ opacity: 100, y: 0}}
      transition={{ delay: 0.5 }}
      className="w-full flex justify-between items-center pb-8 border-b border-[#E5E5E5]"
    >
      <Link href="/" className="lg:ml-2">
        <Image
          src="/assets/shared/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>

      <button className="uppercase text-xs tracking-wider">
        Start Slideshow
      </button>
    </MotionHeader>
  );
}

export default Header;
