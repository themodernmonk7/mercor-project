import { ArrowDown2, Calendar2, MessageQuestion, Notification, SearchNormal1 } from "iconsax-react"

import avatar from '../assets/avatar.png'

const Navbar = () => {
  return (
    <>
    <nav className=" px5 flex justify-between items-center py-5 border-b border-b-[#DBDBDB] ">

      {/* Search box */}
      <form action="" className=" w-1/3 ">
      <div className=" relative flex items-center ">
        <SearchNormal1 size={20} className="pointer-events-none absolute ml-4 text-grayColor " />
        <input type="text" className=" rounded-md bg-[#F5F5F5] outline-none ring-0 border-none py-3 w-full placeholder:text-grayColor text-sm focus:border-none focus:ring-0  pr-3 pl-14" placeholder="Search for anything..."  />
        {/* <SearchNormal1 className=" absolute top-2 " /> */}
      </div>
      </form>

        <div className=" flex justify-center items-center space-x-10 ">

          {/* Icons */}
          <div className=" flex justify-center items-center space-x-5 text-grayColor ">
            <button className="">
            <Calendar2  />
            </button>
            <button className="">
            <MessageQuestion/>
            </button>
            <button className="relative">
            <Notification/>
            <span className=" absolute w-2 h-2 bg-[#D8727D] rounded-full top-[1px] right-[2px] "></span>
            </button>
          </div>

          {/* user */}
          <div className=" flex justify-center items-center space-x-5 ">

            <div className="">
              <p className=" text-black ">Anima Agarwal</p>
              <p className=" text-right text-sm text-grayColor ">U.P, India</p>
            </div>

            <div className=" flex justify-center items-center space-x-3 ">
              <img className=" w-12 h-12 object-cover object-top  rounded-full "  src={avatar} alt="" />
              <ArrowDown2 size={20} className=" text-[#292D32] " />
            </div>

          </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar