import { MdOutlineSettingsVoice } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaCamera } from "react-icons/fa";


const DesktopChatEnv = () => {
  return (
    <div>
      <div className="w-[69vw] h-[100vh] bg-gray-950 phone:w-[320px]">
      <div className="w-full h-[50px] px-4 py-2 flex justify-between  text-[20px] text-white">
            <div className="flex items-center">
                <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-400 mr-2 flex justify-center items-center font-bold">A</div>
                <p>Austine</p>
            </div>
            <div className="flex items-center ">
                <MdOutlineSettingsVoice/>
                <MdOutlineEmojiEmotions className="mx-3"/>
                <FaCamera/>
            </div>
        </div>
        <div className="w-full h-[calc(100vh-110px)] bg-slate-300 p-4 phone:overflow-hidden overflow-y-scroll">
        <div className="">
            <div className="w-[300px]">
            <div className="bg-white max-w-[400px] rounded-[5px] my-2 p-2  items-center flex">Guy how far, how e dey be??</div>
            </div>
             <div className="flex justify-end">
             <div className="bg-green-200 w-[500px]  rounded-[5px] my-2 text-center items-center flex">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, magni ducimus. Impedit magni alias, architecto in nihil ut obcaecati voluptatem!</div>
             </div>
             
             </div>
        <div className="">
            <div className="w-[300px]">
            <div className="bg-white max-w-[400px] rounded-[5px] my-2 p-2  items-center flex">Guy how far, how e dey be??</div>
            </div>
             <div className="flex justify-end">
             <div className="bg-green-200 w-[500px]  rounded-[5px] my-2 text-center items-center flex">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, magni ducimus.</div>
             </div>
             
             </div>
        <div className="">
            <div className="w-[300px]">
            <div className="bg-white max-w-[500px] rounded-[5px] my-2 p-2  items-center flex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque fugit aliquid error perferendis eaque voluptas </div>
            </div>
             <div className="flex justify-end">
             <div className="bg-green-200 w-[400px]  rounded-[5px] my-2 text-center items-center flex">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, magni ducimus. Impedit magni alias</div>
             </div>
             
             </div>
        <div className="">
            <div className="w-[300px]">
            <div className="bg-white max-w-[400px] rounded-[5px] my-2 p-2  items-center flex">Guy how far, how e dey be??</div>
            </div>
             <div className="flex justify-end">
             <div className="bg-green-200 w-[500px]  rounded-[5px] my-2 text-center items-center flex">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, magni ducimus. Impedit magni alias, architecto in nihil ut obcaecati voluptatem!</div>
             </div>
             
             </div>
        
    
        </div>
        <div className="w-full h-[60px] flex  items-center  ">
            <div className="w-[310px] h-[100%]  rounded-[30px] flex items-center text-[30px] pl-4 flex-1 text-white">
                <MdOutlineEmojiEmotions/>
                <input type="text" className="w-[210px]  ml-3 text-[20px] border-none flex-1 outline-none bg-gray-950 p text-white" placeholder="message"/>
                <FaCamera className="text-[20px] mr-4"/>
            </div>
          
             <div className="w-[45px] h-[45px] rounded-[50%] flex justify-center items-center mr-4 bg-green-700 text-[23px] text-white">
                <MdOutlineSettingsVoice />
             </div>
             </div>
      </div>
    </div>
  )
}

export default DesktopChatEnv