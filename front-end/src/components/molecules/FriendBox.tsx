import React, { useState } from "react";
//css
import styles from "./FriendBox.module.css";
// assets
import arrowdown_icon from "../../assets/arrowdown_icon.png";
import arrowup_icon from "../../assets/arrowup_icon.png";

const FriendBox = ({ userList, type }: any) => {
  const allFriends = () => {
    return userList.map((user: any, index: number) => {
      return (
        <li className={styles.container_item} key={index}>
          <div className={styles.friend_img}>
            <img
              className={styles.friend_img}
              src={user.profile_photo}
              alt="friend"
            />
          </div>
          <span className={styles.font_14}>{user.name}</span>
        </li>
      );
    });
  };

  const firstFourFriends = () => {
    return userList.map((user: any, index: number) => {
      if (index < 4) {
        return (
          <li className={styles.container_item} key={index}>
          <div className={styles.friend_img}>
            <img
              className={styles.friend_img}
              src={user.profile_photo}
              alt="friend"
            />
          </div>
          <span className={styles.font_14}>{user.name}</span>
        </li>
        );
      }
    });
  };

  const [changeButton, setChangeButton] = useState("firstFour");
  const [arrowIcon, setArrowIcon] = useState(arrowup_icon);
  const [showBox, setShowBox] = useState(false);

  const handlerChange = () => {
    if (changeButton === "all") {
      setChangeButton("firstFour");
    } else {
      setChangeButton("all");
    }
    setShowBox(!showBox);
  };
  
  return (
    <div className={`${styles.friend_box} ${styles[showBox ? "show" : ""]}`}>
      <li
        className={styles.drop_box}
        onClick={() => {
          handlerChange();
          setArrowIcon(arrowdown_icon === arrowIcon ? arrowup_icon : arrowdown_icon);
        }}
      >
        <h2 className={styles.font_16}>Meus Amigos</h2>
        <img src={arrowIcon} alt="arrow down icon" />
      </li>
      {type === "friend-list" && userList && (
        <>{changeButton === "all" ? allFriends() : firstFourFriends()}</>
      )}
    </div>
  );
};

export default FriendBox;
