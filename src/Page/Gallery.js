import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import GalleryComponent from "../components/Gallery/Gallery";
import BaseLayout from "../components/global/BaseLayout";

function Gallery() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="Gallery">
      <div className="w-full">
        <TransparentHeader
          headertitle="Gallery"
          Subheader="Gallery"
          bgimg={`${rpdata?.stock?.[12]}`}
        />
        <GalleryComponent />
      </div>
    </BaseLayout>
  );
}

export default Gallery;
