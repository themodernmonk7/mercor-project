import React, { useState } from 'react';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.png';
import user5 from '../assets/user5.png';
import { FolderMinus, Message } from 'iconsax-react';
import data from '../utils/data';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const TaskBoard = () => {

  const handleDragEnd = (result) => {
    // console.log(result);
    const {source, destination} = result 
    if(!destination) return 
    if(destination.droppableId === source.droppableId && destination.index === source.index) return
    

  }
  
  return (
    <DragDropContext onDragEnd={handleDragEnd}>

    <section className="grid grid-cols-3 gap-5">
      {data.map((item) => {
        const { id, title: text, identityColor: markColor, tasks } = item;
        return (
          <div key={id} className="rounded-2xl bg-[#F5F5F5] p-5">
            <div className="flex items-center space-x-2">
              <span
                style={{ backgroundColor: `${markColor}` }}
                className={`h-2 w-2 rounded-full`}
              ></span>
              <p className="font-medium capitalize text-blackColor">{text}</p>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0E0E0] text-xs font-medium">
                {tasks.length}
              </span>
            </div>
            <hr
              style={{ borderColor: `${markColor}` }}
              className={`mt-5 border-2 border-[#${markColor}]`}
            />

            {/* Card */}
              {/* <Droppable droppableId="card"> */}
              <Droppable droppableId={text}>
                {(provided) => (
                  <section {...provided.droppableProps} ref={provided.innerRef}>
                    {tasks.map((task, index) => {
                      const {
                        priority,
                        title,
                        description,
                        image,
                        id,
                        files,
                        comments,
                        users,
                      } = task;
                      return (
                        <Draggable key={id} draggableId={id.toString()} index={index}  >
                          {(provided) => (
                            <article
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className={`my-5 rounded-2xl bg-white p-8  `}
                            >
                              <div className="flex items-center justify-between ">
                                <span
                                  className={`rounded px-2 py-1 text-xs font-medium capitalize ${
                                    priority === 'low' && 'bg-[#DFA87433] text-[#D58D49]'
                                  } ${priority === 'high' && 'bg-[#D8727D1A] text-[#D8727D] '}  ${priority === 'completed' && 'bg-[#83C29D33] text-[#68B266]'}`}
                                >
                                  {priority}
                                </span>
                                <button className="text-2xl">...</button>
                              </div>
                              <h3 className="mt-2 text-lg font-semibold text-blackColor">{title}</h3>
                              {image && (
                                <div className="mt-5">
                                  <img
                                    src={image}
                                    alt=""
                                    className={`h-40 w-full object-cover ${
                                      priority === 'completed' && 'h-64 object-top'
                                    }`}
                                  />
                                </div>
                              )}
                              {description && (
                                <p
                                  className={`mt-2 ${
                                    priority === 'completed' ? 'text-[#0D062D' : 'text-grayColor'
                                  }`}
                                >
                                  {description}
                                </p>
                              )}

                              <div className="mt-10 flex items-center justify-between">
                                <div className="flex -space-x-2 overflow-hidden">
                                  <img
                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    src={user5}
                                    alt="{user.handle}"
                                  />
                                  <img
                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    src={user4}
                                    alt="{user.handle}"
                                  />
                                  <img
                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                    src={user3}
                                    alt="{user.handle}"
                                  />
                                </div>
                                <div className="flex items-center justify-center space-x-5 text-xs font-medium text-grayColor">
                                  <div className="flex items-center justify-center space-x-2">
                                    <Message />
                                    <span className="">{comments} comments</span>
                                  </div>
                                  <div className="flex items-center justify-center space-x-2">
                                    <FolderMinus />
                                    <span className="">{files} files</span>
                                  </div>
                                </div>
                              </div>
                            </article>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </section>
                )}
              </Droppable>
          </div>
        );
      })}
    </section>
      </DragDropContext>
  );
};

export default TaskBoard;
