import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Directories from "../components/Home/Directories";
import FormHome from "../components/Home/FormHome";
import Map from "../components/Contact/MapContent";
import Modal from "../components/Home/Modal";
import BaseLayout from "../components/global/BaseLayout";
import CounterUp from "../components/global/CounterUp";
import ServicesHome from "../components/Home/ContentServicesHome";
import HeroSection from "../components/Home/HeroSection";
import Paletacolor from "../components/global/Paletacolor";
import BlockFour from "../components/block/SlideLogoForm";
import BlockOne from "../components/block/Block_10";
import BlockOneV from "../components/block/Block_6";
import VideoPromocional from "../components/global/VideoPromocional";

// para agregar la frase de los años de experiencia o la licencia agregar sloganPrincipal={true}
// para agregar la lista de about agregar listsAbout={true}
// para agregar la lista de servicios agregar listsServices={true}

function Home() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="Home">
      <div className="md:max-w-full w-full">
        <Modal />

        <HeroSection />

        <BlockOne
          text={rpdata?.dbHome?.[0].text}
          image={rpdata?.gallery?.[8]}
          sloganPrincipal={true}
          listsServices={true}
        />
        {/* video promocional */}
        {
          rpdata?.videosPromo?.[0]?.activo ?
            <VideoPromocional
              title={rpdata?.dbSlogan?.[2]?.slogan}
              text={rpdata?.dbAbout?.[1]?.text}
              linkVideo={`${rpdata?.videosPromo?.[0].link}`}
              image={`${rpdata?.videosPromo?.[0].img}`}
              vimeoVideo
            />
            : null
        }
        <Directories />
        <CounterUp image={rpdata?.gallery?.[71]} />
        <BlockOneV
          title={'a little about us'}
          text={rpdata?.dbAbout?.[1]?.text}
          image1={rpdata?.gallery?.[0]}
          image2={rpdata?.gallery?.[10]}
          image3={rpdata?.gallery?.[15]}
          image4={rpdata?.gallery?.[12]}
        />
        <BlockFour
          title={rpdata?.dbSlogan?.[3]?.slogan}
          text={rpdata?.dbHome?.[1]?.text}
          image={rpdata?.gallery?.[9]}
        />
        {/* our reviews */}
        {
          rpdata?.reviews?.isHomeOnly === true ?
            <div className="overflow-hidden">
              <h1 className="pb-10 text-center">{rpdata?.labels?.general?.titleReviews}</h1>
              <div className="flex flex-col md:flex-row-reverse w-4/5 mx-auto space-x-4">
                <div className="md:w-1/2 w-full bg-cover bg-center shadow-2xl rounded-lg" style={{ backgroundImage: `url("${rpdata?.gallery?.[80]}")` }} >
                </div>
                <div className=" px-0 md:px-10 md:w-1/2 w-full py-12">
                  <div className={`${rpdata?.reviews?.links?.[0]}`}></div>
                </div>
              </div>
            </div>
            : null
        }
        <ServicesHome />
        {/* Paleta de Colores */}
        {
          rpdata?.brandingExtra?.[0]?.activo ?
            <Paletacolor />
            : null
        }
        <div
          className="bgFormHome"
          style={{ backgroundImage: `url("${rpdata?.stock?.[1]}")` }}
        >
          <div className="relative">
            <FormHome />
          </div>
        </div>
        <Map />
      </div>
    </BaseLayout>
  );
}

export default Home;
