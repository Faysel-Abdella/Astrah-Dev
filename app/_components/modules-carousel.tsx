import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LucideIcon } from "lucide-react";

interface ModuleCarouselProps {
  title: string;
  description: string;
  output: {
    Icon: LucideIcon;
    title: string;
    evidence: React.ReactNode;
    suggestion: string;
  };
}
const ModuleCarousel = ({
  description,
  output,
  title,
}: ModuleCarouselProps) => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ModuleCarousel;
