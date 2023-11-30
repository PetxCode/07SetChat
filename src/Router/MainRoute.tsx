import { createBrowserRouter } from "react-router-dom";
import Chat from "../Components/Chat";
import Home from "../Components/Home";
import InnerChat from "../Components/InnerChat";
import Sider from "../Static/Sider";
import ChatList from "../Components/ChatList";
import DesktopChatEnv from "../Components/DesktopChatEnv";
import DesktopViewChat from "../Components/DesktopViewChat";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import PrivateState from "./privateState";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateState>
        <Home />
      </PrivateState>
    ),
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/inner-chat",
    element: <InnerChat />,
  },
  {
    path: "/sider",
    element: <Sider />,
  },
  {
    path: "/chat-list",
    element: <ChatList />,
  },
  {
    path: "/chat-env",
    element: <DesktopChatEnv />,
  },
  {
    path: "/desktop",
    element: <DesktopViewChat />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
