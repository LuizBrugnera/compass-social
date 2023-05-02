import React, { useState } from "react";
// css
import styles from './Interactions.module.css';
// assets
import comment_icon from "../../assets/comment_icon.png";
import like_icon from "../../assets/liked_icon.png";
import none_like_icon from "../../assets/none_liked_icon.png";
import share_icon from "../../assets/share_icon.png";

type InteractionsType = {
  likes: number;
  comments: string[];
};
const Interactions = ({ likes, comments }: InteractionsType) => {
  
  const [liked, setLiked] = useState("none_liked");
  const [likeCount, setLikeCount] = useState(likes);
  const [likeImg, setLikeImg] = useState(none_like_icon);
  const handlerLike = () => {
    if (liked === "none_liked") {
      setLiked("liked");
      setLikeCount(likeCount + 1);
      setLikeImg(like_icon);
    } else {
      setLiked("none_liked");
      setLikeCount(likeCount - 1);
      setLikeImg(none_like_icon);
    }
  };

  return (
    <div className={styles.container_interactions}>
      <div className={styles.container_interaction_block} onClick={handlerLike}>
        <img src={likeImg} alt="like icon" />
        <span className={styles.inter_12}>Curtiu</span>
        <div className={`${styles.box_count} ${styles[liked]}`}>
          {likeCount}
        </div>
      </div>
      <div className={styles.container_interaction_block}>
        <img src={comment_icon} alt="comment icon" />
        <span className={styles.inter_12}>Comentários</span>
        <div className={styles.box_count}>
          {comments.length}
        </div>
      </div>
      <div className={styles.container_interaction_block}>
        <img src={share_icon} alt="share icon" />
        <span className={styles.inter_12}>Compartilhar</span>
      </div>
    </div>
  );
};

export default Interactions;
