import React, { useContext,useState } from 'react'
import { GlobalDataContext } from '../../../context/context'
import { ButtonContent } from '../boton/ButtonContent'
import { BiPhoneCall } from 'react-icons/bi'
import { BsCalendar4Range } from 'react-icons/bs'
import Navmenu from '../MenuList'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";


const HeaderTwo = ({ btnName }) => {

    const { rpdata } = useContext(GlobalDataContext)

    const [isOpen, setOpen] = useState(false);

    return (
      <header className="absolute z-[15] w-full">
        <div className="flex">
          <div className="w-full  md:w-[40%] lg:w-[18%] bgBloque">
            <img
              src={rpdata?.dbPrincipal?.logo}
              alt="logo"
              loading="lazy"
              className="w-[80%] mx-auto md:ml-16"
            />
          </div>

          <div className="hidden md:flex w-[65%] lg:w-[72%] mx-auto justify-center items-center bg-2">
            <div className="flex space-x-3 w-full mx-auto justify-center">
              <div className=" w-[40%] text-white  lg:flex mx-auto justify-center">
                <div className="w-[15%] self-center mr-3">
                  <BiPhoneCall fontSize={35} />
                </div>
                <div>
                  <a href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0]?.phone}`}>
                    <p className="-mb-3">Phone Number</p>
                    <h5 className="text-[21px]">
                      {rpdata?.dbPrincipal?.phones?.[0]?.phone}
                    </h5>
                  </a>
                </div>
              </div>
              <div className="hidden w-[30%] text-white border-r-[2px] border-l-[2px] border-dotted border-white bp lg:flex mx-auto justify-center">
                <div className="w-[15%] self-center mr-3">
                  <BsCalendar4Range fontSize={35} />
                </div>
                <div>
                  <p className="-mb-3">Workdays</p>
                  <h5 className="text-[21px]">
                    {rpdata?.dbPrincipal?.workdays?.[0]?.day}
                  </h5>
                  <p className="-mb-3">
                    {rpdata?.dbPrincipal?.workHours?.[0]?.hour}
                  </p>
                </div>
              </div>
              <div className="hidden w-[40%] text-white  lg:flex mx-auto justify-center">
                <div className="w-[15%] self-center mr-3">
                  <BsCalendar4Range fontSize={35} />
                </div>
                <div>
                  <p className="-mb-3">Workdays</p>
                  <h5 className="text-[21px]">
                    {rpdata?.dbPrincipal?.workdays?.[1]?.day}
                  </h5>
                  <p className="-mb-3">
                    {rpdata?.dbPrincipal?.workHours?.[1]?.hour}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden bg-1 md:flex w-[35%] lg:w-[18%] mx-auto justify-center items-center  bg-center bg-contain bg-no-repeat">
            <Link
              to={`/${
                btnName === "view all services" ? "services" : "contact"
              }`}
            >
              <span className="capitalize text-white text-[20px] font-semibold">
                {btnName ? btnName : "FREE ESTIMATE"}
              </span>
            </Link>
          </div>
        </div>

        <div className="bg-white px-3 py-4">
          <div className="flex justify-between md:justify-center items-center">
            <nav>
                <div className='hidden md:block'>
                  <Navmenu />  
                </div>


              <div
                className="md:hidden flex justify-center py-1 rounded-md w-[100px] h-[40px] bg-white"
                onClick={() => setOpen(true)}
              >
                <GiHamburgerMenu className="w-full h-full" />
              </div>
            </nav>
            <div className="block md:hidden">
              <ButtonContent />
            </div>
          </div>
        </div>

        {isOpen ? (
        <div className="fixed z-50 top-0 right-0 left-0 bg-white w-full h-screen overflow-y-auto pb-10">
          <div className="flex justify-end w-[90%] mx-auto relative">
            <button
              className="font-bold text-[20px] mt-5"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
          <div className="w-[60%] mx-auto pb-10">
            <img
              src={rpdata?.dbPrincipal?.logo}
              alt="logo"
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="w-4/5 mx-auto ">
            <Navmenu classes="flex-col gap-3" />
          </div>
        </div>
      ) : null}
      </header>
    );
}

export default HeaderTwo