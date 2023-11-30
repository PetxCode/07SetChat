import { MdOutlineSettingsVoice } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import { SlPhone } from "react-icons/sl";

const Sider = () => {
  return (
    <div>
      <div className="w-[4vw] h-[100vh] bg-black text-white flex items-center flex-col text-[20px] py-2">
        <MdOutlineSettingsVoice />
        <FaCamera className="my-4"/>
        <MdOutlineEmojiEmotions />
        <div className="flex-1"></div>
        <BsCameraVideo/>
        <SlPhone className="my-4"/>
        <BsCameraVideo/>
        <MdOutlineSettingsVoice className="my-4" />
        <MdOutlineEmojiEmotions />
      </div>
    </div>
  );
};

export default Sider;
