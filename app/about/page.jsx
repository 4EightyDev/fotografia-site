"use client";
import HeroSection from "@/app/components/HeroSection";
import HeroImage from "@/app/components/HeroImage";
import StorySection from "@/app/components/StorySection";
import ApproachSection from "@/app/components/ApproachSection";
import TestimonialSection from "@/app/components/TestimonialSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center px-6 md:px-20">
      <HeroSection />
      <HeroImage />
      <StorySection />
      <ApproachSection />
      <TestimonialSection />
    </div>
  );
}