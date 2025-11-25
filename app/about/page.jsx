"use client";
import HeroSection from "../components/HeroSection";
import HeroImage from "../components/HeroImage";
import StorySection from "../components/StorySection";
import ApproachSection from "../components/ApproachSection";
import TestimonialSection from "../components/TestimonialSection";

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