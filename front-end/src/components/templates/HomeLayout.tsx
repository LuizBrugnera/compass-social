import React from "react";
//css
import "./HomeLayout.css";
// components
import FriendBox from "../molecules/FriendBox";
import PostFlush from "../organisms/PostFlush";
// assets
import compass_logo from "../../assets/compass_logo.png";
import house_icon from "../../assets/house_icon.png";
import user_img from "../../assets/user_img.png";
import InputPost from "../atoms/InputPost";

const HomeLayout = ({ userList, postList, setPostList }: any) => {

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
              <h1 className="font_16">Home</h1>
            </div>
            <div className="container_item">
              <span className="font_16">Ednaldo Pereira</span>
              <img src={user_img} alt="my profile" />
            </div>
          </div>
          <div className="container_content">
            <div className="container_feed">
              <div className="post_box add_post">
                <InputPost message={"No que você está pensando?"} setPostList={setPostList}/>
                
              </div>
              <PostFlush postList={postList} userList={userList} />
            </div>
            <div className="container_friends">
              <FriendBox userList={userList} type={'friend-list'}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
