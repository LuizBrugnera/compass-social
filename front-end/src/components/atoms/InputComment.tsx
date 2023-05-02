import React, { useState } from "react";
// assets
import my_user from "../../assets/user_img.png";
// css
import styles from "./InputComment.module.css";
//assets
import cam_icon from "../../assets/cam_icon.png";
import img_icon from "../../assets/img_icon.png";
import clip_icon from "../../assets/clip_icon.png";
import point_icon from "../../assets/point_icon.png";
import smile_icon from "../../assets/smile_icon.png";

// types
type InputAreaType = {
  message: string;
  type: string;
  setPostList?: any;
};
const InputArea = ({ message, type, setPostList }: InputAreaType) => {
  const handlerImgInput = () => {
    setImgInput(!imgInput);
  };
  const handlerLocationInput = () => {
    setLocationInput(!locationInput);
  };

  const handlerAddPost = () => {
    if (description !== "" || url_imagem !== "") {
      const now = new Date();
      setPostList((prevState: any) => {
        return [
          {
            user: "luizbrugnera",
            description: description,
            url_imagem: url_imagem,
            post_date: now.getTime(),
            likes: 0,
          },
          ...prevState,
        ];
      });
    }
  };
  const [imgInput, setImgInput] = useState(false);
  const [locationInput, setLocationInput] = useState(false);
  const [description, setDescription] = useState("");
  const [url_imagem, setUrl_imagem] = useState("");
  /// const [location, setLocation] = useState("");

  return (
    <>
      <div className={styles.container_add}>
        <img className={styles.friend_img} src={my_user} alt="friend" />
        <input
          className={styles.input_post}
          type="text"
          placeholder={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />
      </div>
      {type === "post" && (
        <>
          {imgInput && (
            <div className={`${styles.container_add} ${styles.pad16}`}>
              <img className={styles.friend_img} src={my_user} alt="friend" />
              <input
                className={styles.input_post}
                type="text"
                placeholder={"Adicione o url da imagem"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUrl_imagem(e.target.value)
                }
              />
            </div>
          )}

          {locationInput && (
            <div className={`${styles.container_add} ${imgInput ? styles.pad16_bottom : styles.pad16}`}>
              <img className={styles.friend_img} src={my_user} alt="friend" />
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
              <img
                className={styles.icon_24}
                src={smile_icon}
                alt="smile icon"
              />
            </div>
            <button className={styles.btn_post} onClick={handlerAddPost}>
              Postar
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default InputArea;
