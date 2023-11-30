import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const Chat = () => {
  return (
    <div>
      <div className="w-full h-[100vh] flex justify-center items-center bg-slate-900">
        <div className="w-[370px] h-[600px] bg-white rounded-[20px] overflow-hidden">
            <div className="w-full h-[100px] bg-blue-900 p-3 text-white font-bold">
                <div className="flex justify-between items-center">
                    <h1 className="text-[20px]">WhatsApp</h1>
                    <div className="flex w-[50px] justify-between">
                    <AiOutlineSearch/>
                    <BsThreeDotsVertical/>
                    </div>
                </div>
                <div className="flex justify-between px-5 mt-5">
                    <h2 className="border-b-2 pb-2 px-5">CHAT</h2>
                    <h2>CALLS</h2>
                    <h2>STATUS</h2>
                </div>
            </div>
          <div className="px-4">
          <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-green-600 mr-[8px] flex justify-center items-center text-white font-bold">W</div>
                <div className="">
                    <h1 className="font-bold text-[20px]">Williams</h1>
                    <p className="phone:text-[13px]">Hey There! Are You using whatsapp?</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-green-800">10:25</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600 flex justify-center items-center text-[12px] text-white">5</div>
                </div>
            </div>
          <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-green-600 mr-[8px] flex justify-center items-center text-white font-bold">W</div>
                <div className="">
                    <h1 className="font-bold text-[20px]">Williams</h1>
                    <p className="phone:text-[13px]">Hey There! Are You using whatsapp?</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-green-800">10:25</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600 flex justify-center items-center text-[12px] text-white">5</div>
                </div>
            </div>
          <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-green-600 mr-[8px] flex justify-center items-center text-white font-bold">W</div>
                <div className="">
                    <h1 className="font-bold text-[20px]">Williams</h1>
                    <p className="phone:text-[13px]">Hey There! Are You using whatsapp?</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-green-800">10:25</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600 flex justify-center items-center text-[12px] text-white">5</div>
                </div>
            </div>
          <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-green-600 mr-[8px] flex justify-center items-center text-white font-bold">W</div>
                <div className="">
                    <h1 className="font-bold text-[20px]">Williams</h1>
                    <p className="phone:text-[13px]">Hey There! Are You using whatsapp?</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-green-800">10:25</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600 flex justify-center items-center text-[12px] text-white">5</div>
                </div>
            </div>
          <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-green-600 mr-[8px] flex justify-center items-center text-white font-bold">W</div>
                <div className="">
                    <h1 className="font-bold text-[20px]">Williams</h1>
                    <p className="phone:text-[13px]">Hey There! Are You using whatsapp?</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-green-800">10:25</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600 flex justify-center items-center text-[12px] text-white">5</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
