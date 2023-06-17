import { AddSquare, ArrowLeft2, Colorfilter, LampOn } from "iconsax-react"
import links from "../utils/links"
import { Link, NavLink } from "react-router-dom"

const projectsItems = [
  {
    id: 1, text: 'mobile app', color: '#7AC555'
  },
  {
    id: 2, text: 'website redesign', color: '#FFA500'
  },
  {
    id: 3, text: 'design system', color: '#E4CCFD'
  },
  {
    id: 4, text: 'wireframes', color: '#76A5EA'
  },
]


const Sidebar = () => {
  return (
    <>
    <section className=" px-5  ">
      {/* Logo */}
      <div className=" flex justify-between py-8 border-b ">
        <div className=" flex justify-between items-center space-x-4 ">
        <Colorfilter size="32" variant="Bulk" color="#5030E5" />
        <h1 className=" font-semibold text-xl ">Porject M.</h1>
        </div>
        <button className=" flex justify-center items-center relative ">
          <span className=" absolute -left-2 top-[6px] ">
        <ArrowLeft2 size={20} />
          </span>
        <span className=" ">
        <ArrowLeft2 size={20}  />
        </span>
        </button>
      </div>
      <div className="  my-5 ">
        {links.map((link) => {
          const {id, text, icon} = link
          return (
            <div key={id} className=" ">
            <Link key={id} className=" flex items-center py-3 space-x-4 text-grayColor "  >
              <span className=" font-medium " >{icon}</span>
              <span className=" font-medium " >{text}</span>
            </Link>
            </div>
          )
        })}
      </div>
      <hr className="bg-[#DBDBDB]"  />
      <div className=" my-5 ">
        <div className=" flex justify-between items-center font-bold text-xs text-grayColor ">
          <p className=" uppercase ">My Projects</p>
          <button className="">
          <AddSquare className=" w-5 h-5 " />
          </button>
        </div>
        <div className="">
          {projectsItems.map((item) => {
            const {id, text, color} = item
            console.log(color);
            return (
              <NavLink key={id} className='flex items-center space-x-4 my-5 py-2 first:text-[#0D062D] first:font-semibold font-medium text-grayColor first:bg-[#5030E514] rounded-md '   end >
                <span style={{ backgroundColor: `${color}` }} className={`w-2 h-2 rounded-full`} ></span>
                <p className=" capitalize" >{text}</p>
              </NavLink>
            )
          })}
        </div>
      </div>
      <div className=" bg-[#5030E514] mt-20 rounded-2xl relative  ">
        <div className=" absolute -top-12 inset-x-0 flex justify-center items-center ">
          <div className=" bg-blue-200 rounded-full w-16 h-16 flex justify-center items-center  ">
        <LampOn variant="Bulk" size="32" color="#FBCB18" className=" "  />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center py-5 px-10 space-y-5 ">
        <p className=" text-black font-medium mt-3 " >Thoughts Time</p>
        <p className=" text-grayColor text-xs text-center " >We don't have any notice for you, till then you can share your thoughts with your peers.</p>
        <button className=" bg-white text-black font-medium text-sm text-center py-3 px-6 rounded  ">Write a message</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Sidebar