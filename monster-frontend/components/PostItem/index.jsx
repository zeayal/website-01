import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

export default function PostItem({
  title,
  author,
  date,
  content,
  tags,
  imgUrl,
}) {
  return (
    <div className={styles.post_item}>
      <div className={styles.image_wrapper}>
        <Image src={'https://images.unsplash.com/photo-1679419510159-bd45f61e27d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzQxNzd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODExNDEyODY&ixlib=rb-4.0.3&q=80&w=200'} fill objectFit="cover" alt="照片缩略图" />
      </div>
      <div className={styles.content}>
        <div className={styles.author_date}>
          <span className={styles.post_author}>{author}</span>
          <span> ● </span>
          <span className={styles.post_date}>{date}</span>
        </div>
        <h3 className={styles.post_title}>{title}</h3>
        <p className={styles.p_content}>{content}</p>
        <div className={styles.tags}>
          {(tags || []).map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
