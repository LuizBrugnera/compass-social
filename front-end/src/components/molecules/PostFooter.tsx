import React, {useState} from "react";
// atoms
import Interactions from "../atoms/Interactions";
// css
import "./PostFooter.module.css";
// assets 
import defaultPhoto from "../../assets/default_photo.png";
// types
import { UserType } from "../types/UserType";
import InputArea from "../atoms/InputComment";
type PostFooterType = {
  likes: number;
  comments: any[];
  userList: UserType[];
};
const PostFooter = ({ likes, comments, userList }: PostFooterType) => {

  const getUser = (
    defaultPhoto: string,
    cmt: { user: string; comment: string }
  ) => {
    const user = userList.find((user) => user.user === cmt.user);
    return user ? user : { name: cmt.user, profile_photo: defaultPhoto };
  };

  const allComments = () => {
    return comments.map((cmt: any, index: number) => {
      const user = getUser(defaultPhoto, cmt);

      return (
        <div className="comment_box" key={index}>
          <img className="comment_img" src={user.profile_photo} alt="friend" />
          <div className="container_comment_data">
            <span className="font_12 fw_500">{user.name}: </span>
            <span className="font_11">{cmt.comment}</span>
          </div>
        </div>
      );
    });
  };

  const firstComment = () => {
    return comments.map((cmt: any, index: number) => {
      const user = getUser(defaultPhoto, cmt);
      if (index < 1) {
        return (
          <div className="comment_box" key={index}>
            <img
              className="comment_img"
              src={user.profile_photo}
              alt="friend"
            />
            <div className="container_comment_data">
              <span className="font_12 fw_500">{user.name}: </span>
              <span className="font_11">{cmt.comment}</span>
            </div>
          </div>
        );
      }
    });
  };

  const [changeButton, setChangeButton] = useState("first");
  const [commentMessage, setCommentMessage] = useState("Ver todos os comentários");
  const [showBox, setShowBox] = useState(false);

  const handlerChange = () => {
    if (changeButton === "all") {
      setChangeButton("first");
      setCommentMessage("Ver todos os comentários");
    } else {
      setChangeButton("all");
      setCommentMessage("Ver menos");
    }
    setShowBox(!showBox);
  };

  comments = comments ? comments : [];

  return (
    <div className="post_footer">
      <Interactions likes={likes} comments={comments}/>

      <InputArea message={"O que voce está pensando?"} type={"comment"}/>

      <div className="container_comments">
        <span className="font_12">Todos os comentários</span>
        {changeButton === "all" ? allComments() : firstComment()}
        {comments.length > 1 && <div className="container_see_more" onClick={handlerChange}>
          <div className="line"></div>
          <span className="font_14">{commentMessage}</span>
        </div>}
        {comments.length < 2 && <div className="void_space">
        </div>}
      </div>
    </div>
  );
};

export default PostFooter;
