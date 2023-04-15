import React, { useEffect, useImperativeHandle, useState } from 'react'
import { Form, Modal, Input, message, Button } from 'antd';
import { apiCreateCategory, apiUpdateCategory } from '../../http/category.http';

const AddCategoryModal = React.forwardRef((props, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const [record, setRecord] = useState(null)
    const isEditMode = Boolean(record);
    const handleOk = async () => {
        const values = await form.validateFields()
        console.log('values', values);
        const { categoryName } = values;
        const realName = categoryName?.replace(/\s+/g, '') || "";
        console.log('realName', realName);
        if (realName.length === 0) {
            return message.warning('不能全输入空格')
        }
        const res = isEditMode ? await apiUpdateCategory({ id: record.id, name: realName }) : await apiCreateCategory(realName);
        console.log('res', res);
        if (res.code === 0) {
            handleCancel();
            props.onSuccess?.();
        }
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (isModalOpen === false) {
            setRecord(null)
            form.resetFields();
        }
    }, [isModalOpen])


    useEffect(() => {
        if (record) {
            form.setFieldsValue({
                categoryName: record.name
            })
        }
    }, [record])

    useImperativeHandle(ref, () => ({
        openModal: (data) => {
            setRecord(data.record);
            setIsModalOpen(true);
        }
    }))

    const handleClickAdd = () => {
        setIsModalOpen(true);
    }
    console.log('record', record);
    return (
        <>
            <div className="header">
                <Button type="primary" onClick={handleClickAdd}>新增分类</Button>
            </div>
            <Modal destroyOnClose title={isEditMode ? "编辑分类" : "新增分类"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                >
                    <Form.Item
                        label="分类名称"
                        name="categoryName"
                        rules={[{ required: true, message: '必填' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
})


export default AddCategoryModal