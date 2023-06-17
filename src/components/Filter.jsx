import { AddSquare, ArrowDown2, Calendar1, Edit, FilterSearch, Link21, Menu, Pause, Profile2User } from 'iconsax-react'

import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import user4 from '../assets/user4.png'
import user5 from '../assets/user5.png'
const Filter = () => {
  return (
    <section className=" my-10 ">
      <div className=" flex justify-between items-center ">
      {/* Right */}
      <div className=" flex space-x-5  ">
        <h2 className=" font-semibold text-5xl ">Mobile App</h2>
        <div className=" flex justify-center items-center space-x-5 ">
          <button className=" bg-[#5030E533] p-1 rounded-md ">
          <Edit size={18} color='#5030E5'/>
          </button>
          <button className=" bg-[#5030E533] p-1 rounded-md ">
          <Link21 size={18} color='#5030E5' variant="Outline" />
          </button>
        </div>
      </div>

      {/* Left */}
      <div className="flex justify-center items-center space-x-5">
        {/* invite button */}
        <button className=" flex justify-center items-center space-x-2 ">
          <AddSquare size={20} color='#5030E5' variant='Bulk' />
          <span className=' text-[#5030E5] font-medium ' >
          Invite
          </span>
        </button>
        {/* Users */}
        <div class="flex -space-x-2 overflow-hidden ">
      <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={user5} alt="{user.handle}"/>
      <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={user4} alt="{user.handle}"/>
      <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={user3} alt="{user.handle}"/>
      <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={user2} alt="{user.handle}"/>

      <div class=" flex justify-center items-center h-10 w-10 rounded-full ring-2 ring-white bg-red-200 ">
        <span className=" font-medium text-[#D25B68] ">+2</span>
         </div>
  </div>
      </div>
      </div>

      {/* Filter */}
      <div className=" flex justify-between items-center my-10 text-grayColor font-medium ">
        <div className="flex justify-center items-center gap-5  ">
          <button className="flex justify-center items-center space-x-2 border px-3 py-2 border-grayColor rounded-md ">
            <FilterSearch size={18} />
            <span>
            Filter
            </span>
            <ArrowDown2 size={18}/>
             </button>
          <button className=" flex justify-center items-center space-x-2 border px-3 py-2 border-grayColor rounded-md ">
            <Calendar1 size={18}/>
            <span>
            Today
            </span>
            <ArrowDown2 size={18}/>
             </button>
        </div>

        <div className=" flex justify-center items-center space-x-5 ">
          <button className="flex justify-center items-center space-x-2 border px-3 py-2 border-grayColor rounded-md ">
            <Profile2User size={18}/>
            <span>
            Share
            </span>
          </button>
          <hr className=' border-grayColor border-[1px] h-7 '  />
          <div className=" bg-[#5030E5] w-10 h-10 flex justify-center rounded-md ">
            <button className="">
              <Pause variant='Bold' size={20} color='white' className=' rotate-90' />
            </button>
          </div>
          <button className="">
            <Menu size={20} color='#787486' />
          </button>
        </div>
      </div>

    </section>
  )
}

export default Filter