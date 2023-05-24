import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalDataContext } from "../../../context/context";
import {
  FaCreditCard,
  FaArrowRight,
} from "react-icons/fa";
import { FiPhoneCall, FiMapPin, FiClock } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";
import { FaRegEnvelope } from "react-icons/fa";
import { ButtonContent } from "../boton/ButtonContent";



function Footer2() {
  const { rpdata } = useContext(GlobalDataContext);

  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  // agregar la pestaña de reviews al array de dbMenu

  const el = {
    name: `Reviews`,
    link: `/reviews`,
    child: false,
}

if (rpdata?.reviews?.activo && rpdata?.reviews?.isHomeOnly === false) {
    const num = menu.length - 1
    menu.splice(num, 0, el)
}
//  fin de agregar pestaña de reviews

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center bg-gray-400 bg-opacity-5 p-8 py-14 bg-footer text-white">
        <div className="md:w-3/4 mx-auto text-center flex justify-center mb-4 md:flex-row flex-col-reverse">
          <div className="w-full md:w-[70%] text-start self-center md:px-10">
            <h2 className="text-white md:pt-0 pt-6">
              {rpdata?.dbSlogan?.[4].slogan}
            </h2>
            <ButtonContent btnStyle="three" />
          </div>
          <div className="md:w-[30%] flex justify-center bg-1 rounded-3xl lg:mb-40">
            <img
              src={rpdata?.dbPrincipal?.logo}
              className="w-[100%]"
              alt="Not Found"
            />
          </div>
        </div>
        <div className="md:w-4/5 mx-auto text-center flex justify-center"></div>
        <div className="md:w-4/5 mx-auto">
          <div className="flex md:flex-row md:flex-wrap lg:flex-nowrap md:justify-between flex-col">
            <div className="pt-10 md:w-[40%]">
              <div className="bgColor3 my-2 md:mx-6 p-6 rounded-2xl text-white">
                <h5>About</h5>
                <p className="pb-4">
                  {rpdata?.dbAbout?.[1].text.substring(0, 123)}
                </p>
              </div>
            </div>
            <div className="pt-10 md:w-[20%]">
              <h5>Services</h5>
              <ul className="pl-1">
                {rpdata?.dbServices?.slice(0, 6).map((item, index) => {
                  return (
                    <li className="py-2" onClick={goToTop} key={index}>
                      <Link to="/services" className="flex">
                        <FaArrowRight className="self-center" />
                        <span className="pl-2">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pt-10 md:w-[20%]">
              <h5>Navigation</h5>
              <ul className="pb-3">
                {menu.map((item, index) => {
                  return (
                    <li className="py-2 mx-3" onClick={goToTop} key={index}>
                      <Link to={item.link} className="flex">
                        <FaArrowRight className="self-center" />
                        <span className="pl-2">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pt-10 md:w-[50%] lg:w-[30%]">
              <h5>Contact</h5>
              <ul className="pl-2">
                {rpdata?.dbPrincipal?.location?.slice(0, 1).map((item, index) => {
                  return (
                    <Link to="/contact" key={index}>
                      <li className="py-2 flex items-center">
                        <FiMapPin fontSize={25} />
                        <span className="pl-3">{item.address}</span>
                      </li>
                    </Link>
                  );
                })}
                <a href={`tel:+1${rpdata?.dbPrincipal?.phones[0].phone}`}>
                  <li className="py-2 flex items-center">
                    <FiPhoneCall fontSize={25} />
                    <span className="pl-3">
                      {rpdata?.dbPrincipal?.phones[0].phone}
                    </span>
                  </li>
                </a>
                <a href={`mailto:${rpdata?.dbPrincipal?.emails[0].email}`}>
                  <li className="py-2 flex items-center">
                    <FaRegEnvelope fontSize={25} />
                    <span className="pl-3">
                      {rpdata?.dbPrincipal?.emails[0].email}
                    </span>
                  </li>
                </a>
                {
                  rpdata?.dbPrincipal?.workdays.length > 1 ?
                    <li className="py-2 flex items-center">
                      <GoCalendar fontSize={25} />
                      <div className="flex flex-col">
                        <span className="pl-3">
                          {rpdata?.dbPrincipal?.workdays?.[0].day}
                        </span>
                        <span className="pl-3">
                          {rpdata?.dbPrincipal?.workHours?.[0].hour}
                        </span>
                      </div>
                    </li>
                    :
                    <li className="py-2 flex items-center">
                      <GoCalendar fontSize={25} />
                      <span className="pl-3">
                        {rpdata?.dbPrincipal?.workdays?.[0].day}
                      </span>
                    </li>
                }
                {
                  rpdata?.dbPrincipal?.workdays.length > 1 ?
                    <li className="py-2 flex items-center">
                      <GoCalendar fontSize={25} />
                      <div className="flex flex-col">
                        <span className="pl-3">
                          {rpdata?.dbPrincipal?.workdays?.[1].day}
                        </span>
                        <span className="pl-3">
                          {rpdata?.dbPrincipal?.workHours?.[1].hour}
                        </span>
                      </div>
                    </li>
                    :
                    <li className="py-2 flex items-center">
                      <FiClock fontSize={25} />
                      <span className="pl-3">
                        {" "}
                        {rpdata?.dbPrincipal?.workHours?.[0].hour}
                      </span>
                    </li>
                }

                <li className="py-2 flex items-center">
                  <FaCreditCard />
                  <span className="pl-3 capitalize">
                    {rpdata?.dbPrincipal?.paymentMethod}
                  </span>
                </li>
                {
                  rpdata?.tiposPago?.[0]?.activo ?
                    <li>
                      <img src={rpdata?.tiposPago?.[0]?.img} width={'80%'} alt='no found' />
                    </li>
                    : null
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-around md:flex-row items-center flex-col-reverse text-center text-white  py-4 bg-2">
        <p>
          ©2023, Copy Right By {rpdata?.dbPrincipal?.name}. All Rights Reserved
        </p>
        <ul className="flex">
          {rpdata?.dbSocialMedia?.redes.map((item, index) => {
            return (
              <li key={index} className="mr-7">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <i className={`fab fa-${item.icon}`} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Footer2;
