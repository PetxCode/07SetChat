import { MdOutlineSettingsVoice } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const ChatList = () => {
  return (
    <div>
        <div className="p-5 w-[27vw] h-[100vh] bg-gray-950  overflow-y-scroll">
            <div className="w-full flex justify-between text-white items-center">
            <div className="font-bold text-[25px]">Chats</div>
            <div className="flex text-[20px]">
                <MdOutlineSettingsVoice/>
                <MdOutlineEmojiEmotions className="ml-3"/>
            </div>
            </div>
            <div className="w-full pl-2 flex bg-gray-900 py-1 rounded mt-4 text-white items-center">
                <MdOutlineEmojiEmotions/>
                <input type="text" placeholder="Search or start a new chat" className="ml-2 flex-1 bg-gray-900 border-none outline-none "/>
            </div>
            <div className="">
            <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-green-400 mr-[8px] flex justify-center items-center text-white font-bold">A</div>
                <div className="text-white">
                    <h1 className="text-[18px]">Austine</h1>
                    <p className="phone:text-[13px] text-[15px]">Afar Bro, how e dey be??</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-white text-[13px] mb-3">02:25am</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600  flex justify-center items-center text-[12px] text-white">1</div>
                </div>
            </div>
        
        <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-blue-400 mr-[8px] flex justify-center items-center text-white font-bold">F</div>
                <div className="text-white">
                    <h1 className="text-[18px]">Franklin</h1>
                    <p className="phone:text-[13px] text-[15px]">This Man</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-white text-[13px] mb-3">06:15pm</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600  flex justify-center items-center text-[12px] text-white">2</div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-yellow-400 mr-[8px] flex justify-center items-center text-white font-bold">A</div>
                <div className="text-white">
                    <h1 className="text-[18px]">Amidat</h1>
                    <p className="phone:text-[13px] text-[15px]">Boss Lady 🙌🙌</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-white text-[13px] mb-3">11:25pm</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600  flex justify-center items-center text-[12px] text-white">3</div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-orange-400 mr-[8px] flex justify-center items-center text-white font-bold">W</div>
                <div className="text-white">
                    <h1 className="text-[18px]">Williams</h1>
                    <p className="phone:text-[13px] text-[15px]">Hey There! Are You using whatsapp?</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-white text-[13px] mb-3">10:25pm</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600  flex justify-center items-center text-[12px] text-white">5</div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-green-600 mr-[8px] flex justify-center items-center text-white font-bold">U</div>
                <div className="text-white">
                    <h1 className="text-[18px]">Udida</h1>
                    <p className="phone:text-[13px] text-[15px]">Do Hard Things 💪💪</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-white text-[13px] mb-3">03:07am</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600  flex justify-center items-center text-[12px] text-white">4</div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-red-400 mr-[8px] flex justify-center items-center text-white font-bold">W</div>
                <div className="text-white">
                    <h1 className="text-[18px]">Williams</h1>
                    <p className="phone:text-[13px] text-[15px]">Hey There! Are You using whatsapp?</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-white text-[13px] mb-3">10:25pm</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600  flex justify-center items-center text-[12px] text-white">5</div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-red-400 mr-[8px] flex justify-center items-center text-white font-bold">W</div>
                <div className="text-white">
                    <h1 className="text-[18px]">Williams</h1>
                    <p className="phone:text-[13px] text-[15px]">Hey There! Are You using whatsapp?</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-white text-[13px] mb-3">10:25pm</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600  flex justify-center items-center text-[12px] text-white">5</div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-red-400 mr-[8px] flex justify-center items-center text-white font-bold">W</div>
                <div className="text-white">
                    <h1 className="text-[18px]">Williams</h1>
                    <p className="phone:text-[13px] text-[15px]">Hey There! Are You using whatsapp?</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-white text-[13px] mb-3">10:25pm</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600  flex justify-center items-center text-[12px] text-white">5</div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-4">
             <div className="flex">
             <div className="w-[45px] h-[45px] rounded-[50%] bg-red-400 mr-[8px] flex justify-center items-center text-white font-bold">W</div>
                <div className="text-white">
                    <h1 className="text-[18px]">Williams</h1>
                    <p className="phone:text-[13px] text-[15px]">Hey There! Are You using whatsapp?</p>
                </div>
             </div>
                <div className="flex items-center flex-col">
                    <p className="text-white text-[13px] mb-3">10:25pm</p>
                    <div className="w-[20px] h-[20px] rounded-[50%] bg-green-600  flex justify-center items-center text-[12px] text-white">5</div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ChatList