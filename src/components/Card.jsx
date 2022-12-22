import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Card = ({
  title,
  present_hours,
  Last_week_hours,
  bg_img,
  bg_overley,
}) => {
  let cardClass = `w-[220px] max-[400px]:w-full ${bg_img} ${bg_overley} rounded-2xl bg-no-repeat  bg-right-top   duration-300 hover:scale-105 cursor-pointer `;
  const [hourCounter, setHourCounter] = useState(
    present_hours >= 10
      ? present_hours - 10
      : String(present_hours).padStart(2, "0")
  );
  useEffect(() => {
    if (hourCounter < present_hours)
      setTimeout(() => setHourCounter(hourCounter + 1), 70);
  }, [hourCounter]);
  return (
    <motion.div
      initial={{ paddingTop: 0 }}
      animate={{
        paddingTop: "2.25rem",

        transition: { type: "spring", bounce: 0.25 },
      }}
      className={cardClass}
    >
      <div className="p-6  h-full hover:bg-Dark-blue/80 bg-Dark-blue  rounded-xl ">
        <div className="flex justify-between items-center">
          <span className="text-sm">{title}</span>
          <div>
            <img
              src="./images/icon-ellipsis.svg"
              className="object-cover"
              alt="..."
            />
          </div>
        </div>
        <div className="py-2 pt-2">
          <div className="text-3xl font-[300] transition- ease-in duration-300  flex justify-start relative items-center">
            <div>{hourCounter}</div>
            <span className="absolute  left-9">hrs</span>
          </div>
          <div className="text-xs py-2 text-[#bdc1ff]">
            Last Week -<span>{Last_week_hours}hrs</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
