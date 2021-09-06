import React from "react";
import "./SideBar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://i.pinimg.com/originals/00/da/45/00da457bfaf4b59cacf21f6c654b0af0.jpg" />
        <div className="sidebar__headerRight">
          <IconButton style={{ color: "#B1B3B5" }}>
            <DonutLargeIcon />
          </IconButton>
          <IconButton style={{ color: "#B1B3B5" }}>
            <ChatIcon />
          </IconButton>
          <IconButton style={{ color: "#B1B3B5" }}>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input
            style={{ backgroundColor: "grey" }}
            placeholder="Search or start new chat"
            type="text"
          />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}
export default SideBar;
