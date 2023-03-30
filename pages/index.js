import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/Navbar'
import Banner from '@/components/Banner'
import PostItem from '@/components/PostItem'

const inter = Inter({ subsets: ['latin'] })

const PostList = ({ posts }) => {
  // 这里需要用到grid布局，可以灵活的进行表格布局
  // 与flex布局不同的是，grid布局可以指定每个元素的宽度和高度
  // flex 只能zai主轴上进行布局, grid可以在主轴和交叉轴上进行布局
  // flex是一维布局，grid是二维布局
  return (
    <div className={styles.post_list}>
      {posts.map(item => {
        const { id, title, author, date, imgUrl, content, tags } = item;
        return (
          <PostItem
            key={id}
            title={title}
            author={author}
            date={date}
            content={content}
            tags={tags}
            imgUrl={imgUrl}
          />
        )
      })}
    </div>
  )
}

export default function Home() {
  // 模拟下数据源

  const posts = [
    {
      "id": 1,
      "title": "How to code a chatbot using Python",
      "author": "John Smith",
      "date": "2022-03-15T12:00:00.000Z",
      "content": "In this tutorial, we will show you how to use Python to build your own chatbot.",
      "tags": ["Python", "Chatbot", "Tutorial"],

      imgUrl: '/postImg/post-item-img-01.jpg'
    },
    {
      "id": 2,
      "title": "5 Tips for Writing Clean Code",
      "author": "Jane Doe",
      "date": "2022-02-28T09:30:00.000Z",
      "content": "In this article, we will provide you with 5 tips for writing clean and maintainable code.",
      "tags": ["Programming", "Tips", "Clean Code"],
      imgUrl: '/postImg/post-item-img-02.jpg'
    },
    {
      "id": 3,
      "title": "Why You Should Be Using Git for Your Projects",
      "author": "Mike Johnson",
      "date": "2022-02-19T16:45:00.000Z",
      "content": "In this article, we will explain why Git is an essential tool for developers and how it can help you manage your projects more effectively.",
      "tags": ["Git", "Version Control"],
      imgUrl: '/postImg/post-item-img-03.jpg'
    },
    {
      "id": 4,
      "title": "Introduction to Machine Learning with Python",
      "author": "Sarah Lee",
      "date": "2022-02-10T10:00:00.000Z",
      "content": "This article provides an introduction to machine learning with Python, including key terminology and concepts.",
      "tags": ["Machine Learning", "Python", "Tutorial"],
      imgUrl: '/postImg/post-item-img-04.jpg'
    },
    {
      "id": 5,
      "title": "Top 10 Frameworks for Web Development in 2022",
      "author": "James Brown",
      "date": "2022-01-22T14:30:00.000Z",
      "content": "This article presents the top 10 frameworks for web development in 2022, including their features and advantages.",
      "tags": ["Web Development", "Frameworks"],
      imgUrl: '/postImg/post-item-img-05.jpg'
    },
    {
      "id": 6,
      "title": "Best Books for Learning Programming",
      "author": "Emily Carter",
      "date": "2022-01-15T09:00:00.000Z",
      "content": "In this article, we recommend some of the best books for learning programming, based on our personal experience and research.",
      "tags": ["Programming", "Books"],
      imgUrl: '/postImg/post-item-img-06.jpg'
    },
    {
      "id": 7,
      "title": "10 Common Mistakes to Avoid When Writing Code",
      "author": "Chris Evans",
      "date": "2021-12-28T11:45:00.000Z",
      "content": "This article describes 10 common mistakes that developers make when writing code, along with tips on how to avoid them.",
      "tags": ["Programming", "Mistakes", "Tips"],
      imgUrl: '/postImg/post-item-img-07.jpg'
    },
    {
      "id": 8,
      "title": "How to Build a RESTful API with Node.js",
      "author": "David Kim",
      "date": "2021-12-17T08:00:00.000Z",
      "content": "In this tutorial, we will show you how to build a RESTful API with Node.js, a popular server-side JavaScript framework.",
      "tags": ["Node.js", "RESTful API", "Tutorial"],
      imgUrl: '/postImg/post-item-img-08.jpg'
    },
    {
      "id": 9,
      "title": "Introduction to Data Science with Python",
      "author": "Amy Chen",
      "date": "2021-11-30T15:15:00.000Z",
      "content": "This article provides an introduction to data science with Python, including data analysis, visualization, and machine learning.",
      "tags": ["Data Science", "Python", "Tutorial"],
      imgUrl: '/postImg/post-item-img-09.jpg'
    },
    {
      "id": 10,
      "title": "The Benefits of Using Cloud Computing for Your Business",
      "author": "Mark Johnson",
      "date": "2021-11-17T13:30:00.000Z",
      "content": "In this article, we discuss the benefits of using cloud computing for your business, including scalability, cost savings, and increased efficiency.",
      "tags": ["Cloud Computing", "Business"],
      imgUrl: '/postImg/post-item-img-10.jpg'
    }
  ]


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar />
        <Banner />
        <PostList posts={posts} />
      </main>
    </>
  )
}
