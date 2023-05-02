import React from "react";
// molecules
import PostHeader from "../molecules/PostHeader";
import PostContent from "../molecules/PostContent";
import PostFooter from "../molecules/PostFooter";
// types
import { PostType } from "../types/PostType";
import { UserType } from "../types/UserType";
// css
import "./PostBox.css";

type PostBoxType = {
    post: PostType;
    userList: UserType[];
}

const PostBox = ({post, userList} : PostBoxType) => {
    const defaultPhoto = require("../../assets/default_photo.png") as string;
    
    const getUser = (defaultPhoto : string) => { 
        const user = userList.find(user => user.user === post.user);
        return user ? user : {name: post.user, profile_photo: defaultPhoto};
    }

    const user = getUser(defaultPhoto);

  return (
    <div className="post_box">
      <PostHeader profile_photo={user.profile_photo} name={user.name} post_date={post.post_date}/>
      <PostContent description={post.description} url_imagem={post.url_imagem}/>
      <PostFooter likes={post.likes} comments={post.comments} userList={userList}/>
    </div>
  );
};

export default PostBox;
