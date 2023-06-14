import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import GalleryComponent from "../components/Gallery/Gallery";
import BeforeAfter from "../components/Gallery/BeforeAfter";
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
        {
          rpdata?.beforeAfterGall?.length > 0 ?
            <BeforeAfter />
            : null
        }
        {/* <GalleryComponent /> */}
        <div>
          {
            rpdata?.landings?.length > 0 ?
              rpdata?.landings?.map((item, index) => {
                return (
                  <div className="pt-20 pb-32">
                    <div className="text-center py-5" key={index}>
                      <h2 className="text-center">{rpdata?.labels?.general?.titleGallery}</h2>
                      <h2 className="capitalize">{item.name}</h2>
                    </div>
                    <GalleryComponent galleryImages={item.gallery} />
                  </div>
                )
              })
              :
              <div className="pb-32">
                <div className="text-center py-5">
                  <h2 className="text-center pt-[100px]">{rpdata?.labels?.general?.titleGallery}</h2>
                </div>
                <GalleryComponent galleryImages={rpdata?.gallery?.length > 0 ? rpdata?.gallery : rpdata?.stock} />
              </div>
          }
        </div>
      </div>
    </BaseLayout>
  );
}

export default Gallery;
