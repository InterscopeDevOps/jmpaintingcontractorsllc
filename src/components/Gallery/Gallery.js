import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const GalleryComponent = (props) => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <>
      <h2 className="text-center pt-[100px]">{rpdata?.labels?.general?.titleGallery}</h2>
      <div className="py-[100px] flex justify-center">
        <div className="gallery-content w-4/5 mx-auto">
          <Gallery>
            {
              rpdata?.gallery?.length > 0 ? rpdata?.gallery?.map((item, index) => (
                <Item
                key={index}
                  original={item}
                  thumbnail={item}
                  width="1024"
                  height="550"
                  padding="10px"
                >
                  {({ ref, open }) => <img ref={ref} onClick={open} src={item} alt="Not Found" />}
                </Item>
              ))
              : rpdata?.stock?.map((item, index) => (
                <Item
                key={index}
                  original={item}
                  thumbnail={item}
                  width="1024"
                  height="550"
                  padding="10px"
                >
                  {({ ref, open }) => <img ref={ref} onClick={open} src={item} alt="Not Found"/>}
                </Item>
              ))
            }
          </Gallery>
        </div>
      </div>
    </>
  );
};

export default GalleryComponent;
