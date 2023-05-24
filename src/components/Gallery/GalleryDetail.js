import React, { useContext } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useParams } from "react-router-dom";
import { GlobalDataContext } from "../../context/context";
import BaseLayout from "../global/BaseLayout";
import TransparentHeader from "../global/TransparentHeader";



function GalleryDetail() {
    const { rpdata } = useContext(GlobalDataContext);
    const { id } = useParams();
    // console.log(id);

    return (
        <BaseLayout PageName={`${rpdata?.dbPrincipal?.name}`}>
            {
                rpdata?.landings?.map((item, index) => {
                    if (item.name.replaceAll(" ", "-").toLowerCase() === id) {
                        return (
                            <div key={index}>
                                <TransparentHeader
                                    // imagen aleatoria
                                    bgimg={
                                        rpdata?.gallery?.length > 1 ?
                                            rpdata?.gallery[Math.floor(Math.random() * rpdata?.gallery?.length)]
                                            : rpdata?.stock[Math.floor(Math.random() * rpdata?.stock?.length)]
                                    }
                                    headertitle={item.name}
                                    Subheader={'Our Projects'}
                                />
                                <>
                                    <div className="w-[90%] mx-auto text-center pt-[100px] pb-[80px]">
                                    <h2 className="pb-5 ">our recent projects of:</h2>
                                    <h2>{item.name}</h2>
                                    </div>
                                    <div className="pb-[100px] flex justify-center">
                                        <div className="gallery-content w-4/5 mx-auto">
                                            <Gallery>
                                                {
                                                    item?.gallery.map((item, index) => (
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
                                                }
                                            </Gallery>
                                        </div>
                                    </div>
                                </>
                            </div>
                        );
                    } else return console.log('Servicio no encontrado')

                })
            }


        </BaseLayout>

    )
}

export default GalleryDetail;

