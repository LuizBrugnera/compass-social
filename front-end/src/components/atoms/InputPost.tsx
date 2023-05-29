import React, { useState } from "react";
// assets
import user_img from "../../assets/default_photo.png";
// css
import styles from "./InputPost.module.css";
//assets
import cam_icon from "../../assets/cam_icon.png";
import img_icon from "../../assets/img_icon.png";
import clip_icon from "../../assets/clip_icon.png";
import point_icon from "../../assets/point_icon.png";
import smile_icon from "../../assets/smile_icon.png";
/// auth user
import { useAuth } from "../../security/AuthProvider";
import { PostService } from "../services/PostService";

// types
type InputPostType = {
  message: string;
  setPostList?: any;
};
const InputPost = ({ message, setPostList }: InputPostType) => {
  let { userAuth } = useAuth();

  let user = userAuth?.user
    ? userAuth.user
    : {
        _id: "Usuário",
        name: "Usuário",
        user: "usuario",
        birthdate: "1912-06-23",
        email: "usuario@gmail.com",
        password: "usuario",
        profile_photo: user_img,
      };

  const handlerImgInput = () => {
    setImgInput(!imgInput);
  };
  const handlerLocationInput = () => {
    setLocationInput(!locationInput);
  };

  const handlerAddPost = async () => {
    if (description !== "" || url_imagem !== "") {
      const postRes = (await PostService.createPost(userAuth?.token!, {
        user: userAuth?.user?._id,
        description: description,
        url_imagem: url_imagem,
        post_date: new Date(),
      })) as any;

      setPostList((prevState: any) => {
        return [postRes.response, ...prevState];
      });

      setDescription("");
      setUrl_imagem("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handlerAddPost();
    }
  };

  const [imgInput, setImgInput] = useState(false);
  const [locationInput, setLocationInput] = useState(false);
  const [description, setDescription] = useState("" as string);
  const [url_imagem, setUrl_imagem] = useState("" as string);

  return (
    <>
      <div className={styles.container_add}>
        <img
          className={styles.friend_img}
          src={user.profile_photo}
          alt="friend"
        />
        <input
          className={styles.input_post}
          type="text"
          placeholder={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
          value={description}
          onKeyDown={handleKeyPress}
        />
      </div>

      {imgInput && (
        <div className={`${styles.container_add} ${styles.pad16} `}>
          <img
            className={`${styles.friend_img} ${styles.hidden}`}
            src={user.profile_photo}
            alt="friend"
          />
          <input
            className={styles.input_post}
            type="text"
            placeholder={"Adicione o url da imagem"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUrl_imagem(e.target.value)
            }
            value={url_imagem}
            onKeyDown={handleKeyPress}
          />
        </div>
      )}

      {locationInput && (
        <div
          className={`${styles.container_add} ${
            imgInput ? styles.pad16_bottom : styles.pad16
          }`}
        >
          <img
            className={`${styles.friend_img} ${styles.hidden}`}
            src={user.profile_photo}
            alt="friend"
          />
          <input
            className={styles.input_post}
            type="text"
            placeholder={"Adicione a localização"}
          />
        </div>
      )}

      <div className={styles.container_flex_between}>
        <div className={styles.container_icons}>
          <img className={styles.icon_24} src={cam_icon} alt="cam icon" />
          <img
            className={styles.icon_24}
            src={img_icon}
            alt="img icon"
            onClick={handlerImgInput}
          />
          <img className={styles.icon_24} src={clip_icon} alt="clip icon" />
          <img
            className={styles.icon_24}
            src={point_icon}
            alt="point icon"
            onClick={handlerLocationInput}
          />
          <img className={styles.icon_24} src={smile_icon} alt="smile icon" />
        </div>
        <button className={styles.btn_post} onClick={handlerAddPost}>
          Postar
        </button>
      </div>
    </>
  );
};

export default InputPost;
