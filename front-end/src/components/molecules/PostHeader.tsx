import React from 'react'
// css
import styles from './PostHeader.module.css'
// assets 
import time_icon from '../../assets/time_icon.png'
const PostHeader = ({profile_photo, name, post_date} : any) => {

  const tempCalculator = () => {
    const date = new Date(post_date);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);
    if (days > 0) {
        return `${days} dias atrás`;
    } else if (hours > 0) {
        return `${hours} horas atrás`;
    } else if (minutes > 0) {
        return `${minutes} minutos atrás`;
    } else if(!isNaN(seconds)){
        return `${seconds} segundos atrás`;
    } else {
        return "algum tempo atrás";
    }
    }


  return (
    <div className={styles.post_header}>
        <img className={styles.friend_img} src={profile_photo} alt="profile" />
        <div className={styles.container_friend_data}>
          <span className={styles.font_14}>{name}</span>
          <div className={styles.container_time}>
            <img className={styles.time_icon} src={time_icon} alt="time icon"/>
            <span className={styles.font_gray_12}>
              {tempCalculator()}{/*<i></i>*/}
            </span>
          </div>
        </div>
      </div>
  )
}

export default PostHeader