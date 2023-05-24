import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import BaseLayout from "../components/global/BaseLayout";
import ValuesOne from "../components/values/Values_2";
import BlockFour from "../components/block/BlockThree";
import BlockOne from "../components/block/BlockOne";

function About() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="About">
      <div className="md:max-w-full w-full">
        <TransparentHeader
          headertitle="About"
          Subheader="About"
          bgimg={`${rpdata?.stock?.[6]}`}
        />
        <BlockFour
            title={'a little about us'}
            text={rpdata?.dbAbout?.[0]?.text}
            image={rpdata?.gallery?.[9]}
            listsAbout
          />
        <ValuesOne image={rpdata?.gallery?.[8]} />

        <BlockOne
          title={rpdata?.dbSlogan?.[2]?.slogan}
          text={rpdata?.dbAbout?.[1]?.text}
          image={rpdata?.gallery?.[7]}
        />
      </div>
    </BaseLayout>
  );
}

export default About;
