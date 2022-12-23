import React from "react";
import Card from "./Card";
import User from "./User";

const Layout = () => {
  return (
    // "flex gap-3 items-center m-auto grid-flow-col max-w-[50rem] absolute top-0 bottom-0 right-0 left-0"
    // <div className="flex  flex-col justify-center h-[100%]  border items-center gap-2 w-full">
    //   <div className="">
    //   </div>
    <div className="p-4 flex flex-col lg:flex-row justify-center w-full  items-center gap-2">
      <User />
      <div className=" max-[428px]:w-full grid grid-cols-2 max-[428px]:grid-cols-1  lg:grid-cols-3 gap-2">
        <Card
          title={"work"}
          present_hours={32}
          Last_week_hours={36}
          bg_img={"bg-work"}
          bg_overley={"bg-work-overley"}
        />
        <Card
          title={"play"}
          present_hours={10}
          Last_week_hours={8}
          bg_img={"bg-play"}
          bg_overley={"bg-play-overley"}
        />
        <Card
          title={"study"}
          present_hours={4}
          Last_week_hours={7}
          bg_img={"bg-study"}
          bg_overley={"bg-study-overley"}
        />
        <Card
          title={"exercise"}
          present_hours={4}
          Last_week_hours={5}
          bg_img={"bg-exercise"}
          bg_overley={"bg-exercise-overley"}
        />
        <Card
          title={"social"}
          present_hours={5}
          Last_week_hours={10}
          bg_img={"bg-social"}
          bg_overley={"bg-social-overley"}
        />
        <Card
          title={"self care"}
          present_hours={2}
          Last_week_hours={2}
          bg_img={"bg-self-care"}
          bg_overley={"bg-self-care-overley"}
        />
      </div>
    </div>
  );
};

export default Layout;
