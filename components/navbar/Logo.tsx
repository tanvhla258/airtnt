"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      height="100"
      width="100"
      src="/images/logo.png"
      alt="Logo"
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
