import React from "react";
import "./HomeLayout.css";

const HomeLayout = () => {
  const compass_logo = require("../../assets/compass_logo.png") as string;
  const house_icon = require("../../assets/house_icon.png") as string;
  const user_img = require("../../assets/user_img.png") as string;

  return (
    <main className="container_main">
      <div className="container_section">
        <div className="container_side_bar">
          <div className="container_logo_compass">
            <img className="logo" src={compass_logo} alt="logo compass" />
          </div>
        </div>
        <div className="container_home">
          <div className="container_nav">
            <div className="container_item">
              <img className="house_icon" src={house_icon} alt="house icon" />
              <h1 className="title">Home</h1>
            </div>
            <div className="container_item">
              <span className="username_profile">Ednaldo Pereira</span>
              <img src={user_img} alt="house icon" />
            </div>
          </div>
          <div className="container_content">
            <div className="container_feed">
              <div className="post_box"></div>
              <div className="post_box"></div>
              <div className="post_box"></div>
              <div className="post_box"></div>
              <div className="post_box"></div>
              <div className="post_box"></div>
            </div>
            <div className="container_friends">
              <div className="friend_box"></div>
              <div className="friend_box"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
