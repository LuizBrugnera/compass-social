import React from "react";
import { PostType } from "../types/PostType";
import PostBox from "./PostBox";
import { UserType } from "../types/UserType";

type PostFlushType = {
  postList: PostType[];
  userList: UserType[];
};
const PostFlush = ({ postList, userList }: PostFlushType) => {
  return (
    <>
      {postList.map((post, index) => {
        return <PostBox post={post} userList={userList} key={index} />;
      })}
    </>
  );
};

export default PostFlush;
