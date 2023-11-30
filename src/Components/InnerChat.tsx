import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { SlPhone } from "react-icons/sl";

const InnerChat = () => {
  return (
    <div>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="w-[370px] bg-slate-300">
          <div className="w-full h-[70px] bg-green-950 text-white flex items-center px-2 justify-between">
            <div className="flex w-[150px] justify-between items-center">
                <IoMdArrowBack/>
              <div className="w-[40px] h-[40px] rounded-[50%] bg-red-400"></div>
              <div>
                <h1>Programmer</h1>
                <p>online</p>
              </div>
            </div>
            <div className="w-[90px] flex justify-between text-[20px]">
                <BsCameraVideo/>
                <SlPhone/>
                <BsThreeDotsVertical/>
            </div>
          </div>
          <div className="px-2">
              <div className="flex justify-center">
              <div className="w-[280px] h-[70px] bg-pink-200"></div>
              </div>
             <div>
             <div className="bg-white max-w-[200px] rounded-[5px] my-2 p-2 text-left  items-center flex">Guy how far, how e dey be??</div>
             <div className="flex justify-end">
             <div className="bg-green-200 w-[200px] h-[70px] rounded-[5px] my-2 p-2 items-center flex">Guy how far naa, how far you naa??</div>
             </div>
             </div>
             <div>
             <div className="bg-white max-w-[200px] rounded-[5px] my-2 p-2 text-left  items-center flex">Guy how far, how e dey be??</div>
             <div className="flex justify-end">
             <div className="bg-green-200 w-[200px] h-[70px] rounded-[5px] my-2 text-center items-center flex">Guy how far naa, how e dey be for your side???</div>
             </div>
             <div className="flex justify-end">
             <div className="bg-green-200 w-[200px] h-[70px] rounded-[5px] my-2 p-2 items-center flex">You no go like show boys love nii??</div>
             </div>
             </div>
           
             <div className="w-full h-[60px] flex items-center my-3">
            <div className="w-[310px] h-[100%] bg-white rounded-[30px] flex items-center text-[30px] pl-4">
                <MdOutlineEmojiEmotions/>
                <input type="text" className="w-[210px] ml-3 text-[20px] border-none outline-none" placeholder="message"/>
                <FaCamera className="text-[20px]"/>
            </div>
          
             <div className="w-[45px] h-[45px] rounded-[50%] flex justify-center items-center bg-green-700 text-[23px] text-white">
                <MdOutlineSettingsVoice/>
             </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerChat;
