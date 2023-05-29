import React, {useEffect, useState} from "react";
// atoms
import Interactions from "../atoms/Interactions";
// css
import "./PostFooter.module.css";
// types
import InputComment from "../atoms/InputComment";
import { UserService } from "../services/UserService";
import { useAuth } from "../../security/AuthProvider";
import { CommentService } from "../services/CommentService";

type PostFooterType = {
  likes: number;
  postId: string;
};

const PostFooter = ({ likes, postId }: PostFooterType) => {

  let { userAuth } = useAuth();
  const [ comments, setComments ] = useState([] as any);
 const [ newComment, setNewComment ] = useState({} as any);
  useEffect(() => {
    async function getComments() {
      const commentList = await CommentService.getComments(userAuth?.token!, postId);

      await Promise.all(commentList.response.map(async (cmt: any) => {
        let user = await UserService.getUserAndFillPhoto(userAuth?.token!, cmt.user);
        cmt.user = user;
        return cmt; 
      }));
      setComments(commentList.response);
    }

    getComments()
  }
  , [newComment, postId, userAuth?.token]);

  const allComments = () => {
    return comments.map((cmt: any, index: number) => {
      return (
        <div className="comment_box" key={index}>
          <img className="comment_img" src={cmt.user.profile_photo} alt="friend" />
          <div className="container_comment_data">
            <span className="font_12 fw_500">{cmt.user.name}: </span>
            <span className="font_11">{cmt.comment}</span>
          </div>
        </div>
      );
    });
  };

  const firstComment = () => {
    return comments.map((cmt: any, index: number) => {
      if (index < 1) {
        return (
          <div className="comment_box" key={index}>
            <img
              className="comment_img"
              src={cmt.user.profile_photo}
              alt="friend"
            />
            <div className="container_comment_data">
              <span className="font_12 fw_500">{cmt.user.name}: </span>
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

  return (
    <div className="post_footer">
      <Interactions likes={likes} comments={comments}/>

      <InputComment message={"O que voce está pensando?"} setCommentList={setNewComment} postId={postId}/>

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
