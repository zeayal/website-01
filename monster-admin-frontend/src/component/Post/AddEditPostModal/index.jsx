import { Button, message, Form } from "antd";
import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import {
    ModalForm,
    ProForm,
    ProFormText,
    ProFormTextArea,
    ProFormSwitch,
    ProFormSelect,
} from "@ant-design/pro-components";
import { useMount, useRequest } from 'ahooks'

import { apiGetAllCategories } from "@/http/category.http";
import { apiCreatePost, apiGetPostDetail, apiUpdatePostDetail } from "../../../http/post.http";
import SlateEditor from '../../SlateEditor';

const AddEditPostModal = React.forwardRef(({ refreshList }, ref) => {
    const ModalFormRef = useRef()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [recordId, setRecordId] = useState(null);
    const [postDetail, setPostDetail] = useState(null);

    useImperativeHandle(ref, () => {
        return {
            showModal: ({ recordId }) => {
                setModalIsOpen(true);
                setRecordId(recordId)
            }
        }
    })

    const { loading, run } = useRequest(apiGetPostDetail, {
        manual: true,
        onSuccess: (result, params) => {
            if (result.code === 0) {
                setPostDetail(result.data);
            }
        }
    });

    useEffect(() => {
        if (recordId) {
            run(recordId);
        }
    }, [recordId])

    useEffect(() => {
        if (!modalIsOpen) {
            setPostDetail(null);
            setRecordId(null);
        }

    }, [modalIsOpen])


    useEffect(() => {
        if (postDetail?.id) {
            const {
                category_id,
                title,
                author,
                content,
                is_draft } = postDetail;
 
            ModalFormRef.current?.setFieldsValue({
                categoryId: category_id,
                title,
                author,
                content,
                isDraft: is_draft
            })
        }
    }, [postDetail])


    const getAllPostCategories = async () => {
        const res = await apiGetAllCategories();
        if (res.code === 0) {
            return res.data.map((item) => {
                return {
                    label: item.name,
                    value: item.id,
                };
            });
        }
        return [];
    };
    const commonRules = [
        {
            required: true,
            message: "该项必填",
        },
    ];

    const handleOnFinish = async (values) => {
        const { categoryId, title, author, content, isDraft } = values;
        const body = {
            id: recordId,
            categoryId,
            title, author, content, isDraft: isDraft ? 1 : 0
        }

        const res = recordId ? await apiUpdatePostDetail(body) : await apiCreatePost(body)
        refreshList?.()
        return true;
    }
    console.log('modalIsOpen', modalIsOpen);
    return (
        <div className="post-list-container">
            <ModalForm
                formRef={ModalFormRef}
                loading={loading}
                open={modalIsOpen}
                onOpenChange={setModalIsOpen}
                trigger={
                    <Button
                        style={{ margin: "10px 0" }}
                        type="primary"
                    >
                        添加文章
                    </Button>
                }
                title="新增文章"
                modalProps={{
                    destroyOnClose: true,
                    className: "modal-full"
                }}
                onFinish={handleOnFinish}
            >

                <ProFormSelect
                    name="categoryId"
                    label="文章分类"
                    rules={commonRules}
                    request={getAllPostCategories}
                />
                <ProFormText name="title" label="文章标题" rules={commonRules} />
                <ProFormText name="author" label="作者" rules={commonRules} />
                <ProFormSwitch name="isDraft" label="是否保存为草稿" />
    
               
                <ProForm.Item name="content" label="内容" rules={commonRules}  >
                    <SlateEditor />
                </ProForm.Item>
               

            </ModalForm>
        </div>
    );
})



export default AddEditPostModal