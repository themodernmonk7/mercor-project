import React from 'react'
import user3 from '../assets/user3.png'
import user4 from '../assets/user4.png'
import user5 from '../assets/user5.png'
import { FolderMinus, Message } from 'iconsax-react'
import data from '../utils/data'



const tasks = [
{
  id:1, 
  text: 'To Do',
  count: 4,
  markColor: '5030E5'
},
{
  id:2, 
  text: 'On Progress',
  count: 3,
  markColor: 'FFA500'
},
{
  id:3, 
  text: 'Done',
  count: 2,
  markColor: '76A5EA'
},
]

const TaskBoard = () => {
  return (
    <section className=" grid grid-cols-3 gap-5  ">
      {data.map((item) => {
        const {id, text, markColor, count} = item
        return(
    <div key={id} className=" bg-[#F5F5F5] rounded-2xl p-5  ">
        <div className=" flex items-center space-x-2  ">
          <span style={{ backgroundColor: `#${markColor}` }} className={`w-2 h-2 rounded-full  `}></span>
          <p className=" font-medium text-blackColor ">{text}</p>
          <span  className=" bg-[#E0E0E0] w-5 h-5 rounded-full font-medium text-xs flex justify-center items-center "> {count} </span>
        </div>
        <hr style={{ borderColor: `#${markColor}` }} className={`mt-5 border-2 border-[#${markColor}] `} />

        {/* Card */}
        <article className=" bg-white rounded-2xl my-5 p-8 ">
          <div className=" flex justify-between items-center ">
          <span className=" bg-[#DFA87433] text-[#D58D49] font-medium text-xs rounded px-2 py-1 ">Low</span>
          <button className=" text-2xl ">...</button>
          </div>
          <h3 className=" font-semibold text-lg mt-2 text-blackColor "> Brainstorming </h3>
          <p className=" text-grayColor mt-2 ">Brainstorming brings team members' diverse experience into play. </p>

          <div className=" mt-10 flex justify-between items-center ">
          <div class="flex -space-x-2 overflow-hidden ">
      <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={user5} alt="{user.handle}"/>
      <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={user4} alt="{user.handle}"/>
      <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={user3} alt="{user.handle}"/>
      </div>
      <div className=" text-grayColor text-xs font-medium flex justify-center items-center space-x-5 ">
        <div className="flex justify-center items-center space-x-2">
          <Message/>
          <span className="">10 comments</span>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <FolderMinus/>
          <span className="">3 files</span>
        </div>

      </div>
          </div>

        </article>

        
      </div>
        )
      })}
    </section>
  )
}

export default TaskBoard