import React from "react";
import Head from "next/head";
import styles from "./index.module.css";

export default function Footer() {
  // 页脚两部分，上面标语，下面是个列表
  // 背景渐变色

  // 让chatgpt生成个列表数据
  // 用map生成列表
  const list = [
    { id: 1, title: "Apple" },
    { id: 2, title: "Banana" },
    { id: 3, title: "Carrot" },
    { id: 4, title: "Dog" },
    { id: 5, title: "Elephant" },
    { id: 6, title: "Frog" },
    { id: 7, title: "Guitar" },
    { id: 8, title: "Horse" },
    { id: 9, title: "Insect" },
    { id: 10, title: "Jacket" },
    { id: 11, title: "Kangaroo" },
    { id: 12, title: "Laptop" },
    { id: 13, title: "Mountain" },
    { id: 14, title: "Nose" },
    { id: 15, title: "Ocean" },
    { id: 16, title: "Piano" },
    { id: 17, title: "Quilt" },
    { id: 18, title: "Rocket" },
    { id: 19, title: "Squirrel" },
    { id: 20, title: "Telephone" },
    { id: 21, title: "Umbrella" },
    { id: 22, title: "Violin" },
    { id: 23, title: "Waterfall" },
    { id: 24, title: "Xylophone" },
    { id: 25, title: "Yellow" },
    { id: 26, title: "Zebra" },
    { id: 27, title: "Ant" },
    { id: 28, title: "Bicycle" },
    { id: 29, title: "Cup" },
    { id: 30, title: "Dolphin" },
    { id: 31, title: "Eagle" },
    { id: 32, title: "Fishing" },
    { id: 33, title: "Gorilla" },
    { id: 34, title: "Hotdog" },
    { id: 35, title: "Igloo" },
    { id: 36, title: "Jellyfish" },
    { id: 37, title: "Kite" },
    { id: 38, title: "Lion" },
    { id: 39, title: "Monkey" },
    { id: 40, title: "Ninja" },
    { id: 41, title: "Oxygen" },
    { id: 42, title: "Penguin" },
    { id: 43, title: "Quicksand" },
    { id: 44, title: "Rabbit" },
    { id: 45, title: "Sword" },
    { id: 46, title: "Turtle" },
    { id: 47, title: "Unicorn" },
    { id: 48, title: "Violence" },
  ];

  return (
    <div className={styles.footer}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"
        />
      </Head>
      <div className={styles.footer_top}>
        <h1>Let's get started on something great</h1>
        <p>Join over 4,000+ startups already growing with Untitled.</p>
        <a href="">Start your 7-day free trial</a>
      </div>
      <div className={styles.footer_content}>
        {list.map((item) => (
          <span className={styles.list_item}>{item.title}</span>
        ))}
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.logo}>
          <span style={{ fontSize: 20 }} class="material-symbols-outlined">
            home
          </span>
          <span>Untitled UI</span>
        </div>
        <div className={styles.copyright}>
          @2020 title. All rights reserved.
        </div>
      </div>
    </div>
  );
}
