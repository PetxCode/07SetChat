import Sider from "../Static/Sider";
import ChatList from "./ChatList";
import DesktopChatEnv from "./DesktopChatEnv";

const DesktopViewChat = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center">
      <div className="phone:hidden">
        <Sider />
      </div>

      <div className="phone:hidden">
        <ChatList />
      </div>

      <DesktopChatEnv />
    </div>
  );
};

export default DesktopViewChat;
