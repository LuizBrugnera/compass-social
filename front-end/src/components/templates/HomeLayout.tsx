import React, { useState, useEffect } from "react";

import "./HomeLayout.css";

import FriendBox from "../molecules/FriendBox";
import PostFlush from "../organisms/PostFlush";
import InputPost from "../atoms/InputPost";

import compass_logo from "../../assets/compass_logo.png";
import house_icon from "../../assets/house_icon.png";
import user_img from "../../assets/default_photo.png";

import { useAuth } from "../../security/AuthProvider";
import { PostService } from "../services/PostService";
import { UserService } from "../services/UserService";

const HomeLayout = () => {
  const [postList, setPostList] = useState([] as any);
  const [userList, setUserList] = useState([] as any);

  const { userAuth } = useAuth();
  let user = userAuth?.user
    ? userAuth.user
    : {
        name: "Usuário",
        user: "usuario",
        birthdate: "1912-06-23",
        email: "usuario@gmail.com",
        password: "usuario",
        profile_photo: user_img,
      };
  user.profile_photo = user.profile_photo ? user.profile_photo : user_img;

  useEffect(() => {
    PostService.getPosts(userAuth?.token!).then((res) =>
      res.response ? setPostList(res.response) : setPostList([])
    );
    UserService.getUsersAndFillPhoto(userAuth?.token!).then((res) =>
      res ? setUserList(res) : setUserList([])
    );
  }, []);

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
              <span className="font_16">{user.name}</span>
              <div className="profile_box">
                <img
                  className="user_img"
                  src={user.profile_photo}
                  alt="user img"
                />
              </div>
            </div>
          </div>
          <div className="container_content">
            <div className="container_feed">
              <div className="post_box add_post">
                <InputPost
                  message={"No que você está pensando?"}
                  setPostList={setPostList}
                />
              </div>
              <PostFlush postList={postList} />
            </div>
            <div className="container_friends">
              <FriendBox userList={userList} type={"friend-list"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
