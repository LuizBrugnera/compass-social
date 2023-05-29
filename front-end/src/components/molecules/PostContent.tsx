import React from "react";
// css
import styles from "./PostContent.module.css";
// types
type PostContentType = {
  description: string;
  url_imagem: string;
};

const PostContent = ({ description, url_imagem }: PostContentType) => {
  const font = url_imagem ? "font_12_pd16" : "font_12";

  return (
    <div className={styles.post_content}>
      <p className={styles[font]}>{description}</p>
      <div className={styles.img_box_post_content}>
        {url_imagem && <img
          className={styles.img_post_content}
          src={url_imagem}
          alt="content"
        />}
      </div>
    </div>
  );
};

export default PostContent;
