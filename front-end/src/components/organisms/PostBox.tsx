import React, { useState, useEffect } from "react";
// molecules
import PostHeader from "../molecules/PostHeader";
import PostContent from "../molecules/PostContent";
import PostFooter from "../molecules/PostFooter";
// types
import { PostType } from "../types/PostType";
// css
import "./PostBox.css";
import { UserService } from "../services/UserService";
import { useAuth } from "../../security/AuthProvider";

type PostBoxType = {
  post: PostType;
};

const PostBox = ({ post }: PostBoxType) => {
  let { userAuth } = useAuth();

  const [userPost, setUserPost] = useState({} as any);

  useEffect(() => {
    UserService.getUserAndFillPhoto(userAuth?.token!, post.user).then((response) => {
      setUserPost(response);
    });
  }, []);

  return (
    <div className="post_box">
      <PostHeader
        profile_photo={userPost.profile_photo}
        name={userPost.name}
        post_date={post.post_date}
      />
      <PostContent
        description={post.description}
        url_imagem={post.url_imagem}
      />
      <PostFooter likes={post.likes} postId={post._id} />
    </div>
  );
};

export default PostBox;
