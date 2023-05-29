import React from "react";
import PostBox from "./PostBox";
import { PostType } from "../types/PostType";

type PostFlushType = {
  postList: PostType[];
};
const PostFlush = ({ postList }: PostFlushType) => {
  
  return (
    <>
      {postList.map((post, index) => {
        return <PostBox post={post} key={index} />;
      })}
    </>
  );
};

export default PostFlush;
