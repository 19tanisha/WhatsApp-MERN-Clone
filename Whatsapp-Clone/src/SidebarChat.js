import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />

      <div className="sidebarchat__info">
        <p className="sidebar__message1">Room Name</p>
        <p className="sidebar__message2">This is the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
