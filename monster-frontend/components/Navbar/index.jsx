import React from "react";
import Image from "next/image";
import logo from "../../public/logo.jpg";
import styles from "./index.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <Image src={logo} alt="logo" width={30} height={30} />
        <span style={{ marginLeft: 10 }}>Untitled UI</span>
      </div>
      <ul className={styles.menu_list}>
        <li>Home</li>
        <li>Features</li>
        <li>Services</li>
        <li>Portfolio</li>
      </ul>
      <div className={styles.register}>
        <button className={styles.login}>Login</button>
        <button className={styles.signup}>Sign Up</button>
      </div>
    </div>
  );
}
