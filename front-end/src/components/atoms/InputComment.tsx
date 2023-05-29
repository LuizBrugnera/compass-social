import React, { useState } from "react";
// assets
import user_img from "../../assets/default_photo.png";
// css
import styles from "./InputComment.module.css";
//assets
import cam_icon from "../../assets/cam_icon.png";
import img_icon from "../../assets/img_icon.png";
import clip_icon from "../../assets/clip_icon.png";
import point_icon from "../../assets/point_icon.png";
import smile_icon from "../../assets/smile_icon.png";
///auth user
import { useAuth } from "../../security/AuthProvider";
import { CommentService } from "../services/CommentService";

// types
type InputAreaType = {
  message: string;
  setCommentList: any;
  postId: string;
};
const InputArea = ({ message, setCommentList, postId }: InputAreaType) => {
  let { userAuth } = useAuth();

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

  const handlerAddComment = async () => {
    if (comment !== "") {
      const commentResponse = await CommentService.createComment(
        userAuth?.token!,
        postId,
        { user: user, comment: comment }
      );

      setCommentList(commentResponse.response);
      setComment("");
    }
  };
  const [comment, setComment] = useState("");

  return (
    <>
      <div className={styles.container_add}>
        <img
          className={styles.profile_img}
          src={user.profile_photo}
          alt="you"
        />
        <input
          className={styles.input_post}
          type="text"
          placeholder={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setComment(e.target.value)
          }
          value={comment}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              handlerAddComment();
            }
          }}
        />
        <div className={styles.icons}>
          <img className={styles.icon_24} src={cam_icon} alt="camera icon" />
          <img className={styles.icon_24}  src={img_icon} alt="img icon" />
          <img className={styles.icon_24}  src={clip_icon} alt="clip icon" />
          <img className={styles.icon_24}  src={point_icon} alt="point icon" />
          <img className={styles.icon_24}  src={smile_icon} alt="smile icon" />
        </div>
      </div>
    </>
  );
};

export default InputArea;
