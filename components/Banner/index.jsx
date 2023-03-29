import React from "react";
import Image from "next/image";
import banner from "../../public/banner.jpg";
import styles from "./index.module.css";

export default function Banner() {
  return (
    <>
      <div>
        <div className={styles.banner_content}>
          <p>The blog</p>
          <h1>Writings from our team</h1>
          <p>
            The laest industry news, interviews, technologies, and resources.
          </p>
        </div>
      </div>
      <div className={styles.banner}>
        <Image src={banner} alt="banner" fill objectFit="cover" />
      </div>
    </>
  );
}
