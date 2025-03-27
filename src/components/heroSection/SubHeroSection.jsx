import React from "react";
const SubHeroSection = () => {
  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
      <p className="md:block sm:hidden">Adaptability</p>
      <p className="md:block sm:hidden">Team Work</p>
      <p>Attention to Detail</p>
    </div>
  );
};

export default SubHeroSection;