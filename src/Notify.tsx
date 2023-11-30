import  { useEffect, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { io } from "socket.io-client";

const URL: string = "http://localhost:1122";
const socket = io(URL);


const Notify = () => {
  const [state, setState]:any = useState<Array<{}>>([]);

  
useEffect(() => {
  socket.on("firstio", (res) => {
    console.log(res);
    const i = setState(...state , res)
    localStorage.setItem("notice", JSON.stringify(i));
  });
}, []);

const readState = JSON.parse(localStorage.getItem("notice")!);
console.log("readstate:",readState)
  return (
    <div>
      <div>
        {readState?.length > 0 && (
          <div className="p-2 bg-red-500 text-white rounded-[50%] h-[15px] w-[15px] flex justify-center items-center right-0 text-[12px] absolute z-10">
            {readState.length}
          </div>
        )}
        <IoIosNotifications className="relative" size={30} />
      </div>
    </div>
  );
};

export default Notify;
