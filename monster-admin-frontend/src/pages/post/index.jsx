import React, { useEffect, useRef, useState } from "react";
import { Button, Popconfirm, Space, Table, Tag } from "antd";
import { apiDeletePost, apiGetPostList } from "../../http/post.http";
import { formatDateTime } from "@/utils/date";
import AddEditPostModal from "../../component/Post/AddEditPostModal";
export default function Post() {
  const [dataSource, setDataSource] = useState([]);
  const AddEditPostModalRef = useRef();
  const columns = [
    {
      title: "文章ID",
      dataIndex: "id",
      width: 70,
    },
    {
      title: "分类",
      dataIndex: "category",
      width: 70,
      render: text => {
        return <Tag color="green">{text}</Tag>
      }
    },
    {
      title: "标题",
      dataIndex: "title",
      width: 200,
    },
    {
      title: "内容",
      dataIndex: "content",
      width: 200,
    },
    {
      title: "作者",
      dataIndex: "author",
      width: 100,
    },
    {
      title: "草稿",
      dataIndex: "is_draft",
      width: 80,
      render: (text) => {
        return text ? '是' : '否'
      }
    },

    {
      title: "创建时间",
      dataIndex: "created_at",
      width: 200,
      render(text) {
        return formatDateTime(text)
      }
    },
    {
      title: "更新时间",
      dataIndex: "update_at",
      width: 200,
      render(text) {
        return formatDateTime(text)
      }
    },
    {
      title: "操作",
      dataIndex: 'action',
      fixed: 'right',
      width: 100,
      render: (text, record) => {
        return (
          <Space>
            <a onClick={() => {
              console.log('AddEditPostModalRef.current', AddEditPostModalRef.current)
              AddEditPostModalRef.current?.showModal({
                recordId: record.id
              })
            }}>编辑</a>
            <Popconfirm

              title='确定要删除文章?'
              description={record.title}
              onConfirm={async () => {
                const res = await apiDeletePost(record.id)
                getPosts()
              }}>
              <a>删除</a>
            </Popconfirm>
          </Space>
        )
      }
    }
  ];

  const getPosts = async () => {
    const res = await apiGetPostList()
    if (res.code === 0) {
      setDataSource(res.data);
    }
  }

  useEffect(() => {
    getPosts()
  }, [])
  console.log('dataSource', dataSource);
  return (
    <div style={{ margin: '0 1rem' }}>
      <AddEditPostModal ref={AddEditPostModalRef} refreshList={getPosts} />
      <Table rowKey='id' scroll={{ x: 1500 }} columns={columns} dataSource={dataSource}></Table>
    </div>
  );
}
