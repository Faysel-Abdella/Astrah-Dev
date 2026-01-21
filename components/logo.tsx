import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  imgClassName?: string;
}
export default function Logo({ className, imgClassName }: LogoProps) {
  return (
    <a href="/" className={cn("flex items-center gap-3 shrink-0", className)}>
      <Image
        src="/astrah-logo.png"
        alt="ASTRAH QS"
        width={135}
        height={32}
        className={cn(`h-4 w-auto`, imgClassName)}
        priority
        quality={100}
      />
    </a>
  );
}
