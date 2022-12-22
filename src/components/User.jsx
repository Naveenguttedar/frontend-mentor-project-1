import React from "react";

const User = () => {
  return (
    <div className="rounded-xl overflow-hidden w-[460px] max-[400px]:w-full lg:w-[220px] ">
      <div className="bg-[#4855eb] p-4  flex gap-4 lg:block  items-center   ">
        <img
          className="w-[80px] object-cover border-2 border-white rounded-full"
          src="./images/image-jeremy.png"
          alt=""
        />
        <div className="my-6">
          <p className="text-[#bdc1ff] text-xs ">Report for</p>
          <h3 className=" text-2xl sm:text-3xl  font-[300]">Jermy Robson</h3>
        </div>
      </div>
      <div className="bg-Dark-blue p-5  text-sm text-[#bdc1ff] flex lg:block justify-evenly items-center">
        <div className="hover:text-white py-2 cursor-pointer">Daily</div>
        <div className="hover:text-white py-2 cursor-pointer">Weekly</div>
        <div className="hover:text-white py-2 cursor-pointer">Mothly</div>
      </div>
    </div>
  );
};

export default User;

{
  /* <div className="rounded-xl overflow-hidden w-full">
      <div className="bg-[#4855eb] p-4 flex gap-4 sm:block w-full justify-between items-center ">
        <img
          className="w-[60px] sm:w-[80px] object-cover border-2 border-white rounded-full"
          src="/images/image-jeremy.png"
          alt=""
        />
        <div className="my-8">
          <p className="text-[#bdc1ff] text-xs ">Report for</p>
          <h3 className=" text-xl  font-[300]">Jermy Robson</h3>
        </div>
      </div>
      <div className="bg-Dark-blue p-5  text-sm text-[#bdc1ff] flex sm:block justify-between items-center">
        <div className="hover:text-white py-2">Daily</div>
        <div className="hover:text-white py-2">Weekly</div>
        <div className="hover:text-white py-2">Mothly</div>
      </div>
    </div> */
}
