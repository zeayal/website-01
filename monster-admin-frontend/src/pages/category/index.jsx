import { Table, Button, Space, Popconfirm } from "antd";
import React, { useEffect, useRef, useState } from "react";
import './index.less';
import { apiDeleteCategory, apiGetAllCategories } from "../../http/category.http";
import AddCategoryModal from '../../component/Category/AddCategoryModal';

export default function Category() {
    const AddCategoryModalRef = useRef();
    const [dataSource, setDataSource] = useState([]);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: '分类名称',
            dataIndex: 'name',
        },
        {
            title: '操作',
            dataIndex: 'action',
            render: (text, record) => {
                return (
                    <Space>
                        <Button type="primary" onClick={() => {
                            AddCategoryModalRef.current?.openModal?.({
                                record
                            })
                        }}>编辑</Button>
                        <Popconfirm
                            title="确认删除"
                            description={`删除 ${record?.name}`}
                            onConfirm={async () => {
                                const res = await apiDeleteCategory(record.id)
                                if (res.code === 0) {
                                    handleOnRefreshTableList();
                                }
                            }}
                            okText="删除"
                            cancelText="取消"
                        >
                            <Button type="primary" danger>删除</Button>
                        </Popconfirm>

                    </Space>
                )
            }
        }
    ]



    const getData = async () => {
        const res = await apiGetAllCategories();
        console.log('res', res);
        if (res.code === 0) {
            setDataSource(res.data);
        }
    }

    useEffect(() => {
        // 页面初始化时请求数据
        getData();
    }, [])


    const handleOnRefreshTableList = () => {
        getData()
    }

    return (
        <div className="catogory-container">
            <AddCategoryModal ref={AddCategoryModalRef} onSuccess={handleOnRefreshTableList} />
            <Table rowKey="id" columns={columns} dataSource={dataSource} />

        </div>
    );
}
