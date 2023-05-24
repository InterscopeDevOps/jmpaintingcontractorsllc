import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";

function HeroSection() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <div className="pic-wrapper">
        <figure
          className="pic-1"
          style={{ background: `url("${rpdata?.stock?.[9]}")` }}
        ></figure>
        <figure
          className="pic-2"
          style={{ background: `url("${rpdata?.stock?.[4]}")` }}
        ></figure>
        <figure
          className="pic-3"
          style={{ background: `url("${rpdata?.stock?.[15]}")` }}
        ></figure>
        <figure
          className="pic-4"
          style={{ background: `url("${rpdata?.stock?.[7]}")` }}
        ></figure>
        <div className="z-10 relative w-4/5 mx-auto pt-[380px] pb-[100px] md:pb-[150px] md:pt-[360px]  ">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-white text-center">
              {rpdata?.dbSlogan?.[4].slogan}
            </h1>
            <p className="text-white text-center">{rpdata?.dbValues?.[0].description}</p>
            <div className="flex justify-center md:block">
              <ButtonContent />
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
