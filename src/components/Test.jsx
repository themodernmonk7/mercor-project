import React from "react"
import model from "../assets/model.webp"
import { Link } from "iconsax-react"

export const Test = () => {
  return (
    <div className="container mx-auto mt-20 px-5 sm:px-2">
      <div className="mt-2 flex items-center justify-center rounded-2xl bg-gray-200 px-5  shadow-sm">
        <div className=" flex w-1/2 flex-col items-start justify-start space-y-3 py-12">
          <div className="  font-lora sm:leading-10">
            <span className="  relative inline-block   text-xl font-semibold uppercase before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-white sm:text-6xl  ">
              <span className="relative  ">let's</span>
            </span>
            <br></br>{" "}
            <span className="  text-xl font-semibold  uppercase sm:text-6xl ">
              explore
            </span>{" "}
            <br></br>{" "}
            <span className=" relative inline-block   text-xl font-semibold uppercase before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-yellow-400 sm:text-6xl ">
              <span className="relative">unique</span>
              {/* unique */}
            </span>{" "}
            <br></br>{" "}
            <span className=" text-xl font-semibold   uppercase sm:text-6xl ">
              clothes
            </span>
          </div>
          <p className="  font-charm font-semibold sm:text-xl ">
            live for influential and innovative fashion
          </p>
          <button className="rounded-md bg-black px-7 py-3 text-white">
            <Link to="/products">shop now</Link>
          </button>
        </div>
        <div className="  flex flex-1 items-center justify-end">
          <img
            src={model}
            alt=" "
            className="h-full w-full scale-125 md:scale-100 "
          />
        </div>
      </div>
    </div>
  )
}
