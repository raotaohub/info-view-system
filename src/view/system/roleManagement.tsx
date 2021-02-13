import { Button, Table, Modal } from "antd"
import { ColumnsType } from "antd/lib/table";
import { useState } from "react";
import styled from 'styled-components';
import { Title } from "../../components/Title";

interface roleList {
    id: number;
    name: string;
    department: string;
    crateTime: string;
}

const list: roleList[] = [
    {
        id: 1,
        name: '超级管理员',
        department: '全集团',
        crateTime: '2021-01-02'
    },
    {
        id: 2,
        name: '财务审核岗',
        department: '集团财务部',
        crateTime: '2021-01-02'
    },
    {
        id: 3,
        name: '一般员工',
        department: '全集团',
        crateTime: '2021-01-02'
    }
];



export default function RoleManagement() {
    const [visible, setVisible] = useState(false);

    const columns: ColumnsType<roleList> = [
        {
            dataIndex: 'id',
            title: '序号'
        },
        {
            dataIndex: 'name',
            title: '角色名称'
        },
        {
            dataIndex: 'department',
            title: '所属部门'
        },
        {
            dataIndex: 'crateTime',
            title: '创建时间'
        },
        {
            title: '操作',
            align: 'center',
            render: (value) => {
                return <Button type={'link'} onClick={() => setVisible(true)}>修改</Button>
            }
        }
    ]

    return (
        <Containor>
            <Title title={'角色菜单权限管理'} />
            <Table rowKey={rowkey => rowkey.id} size={'small'} bordered columns={columns} dataSource={list} ></Table>

            <Modal
                title="修改角色菜单权限"
                okText="确定"
                cancelText="返回"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </Containor>
    )
}


const Containor = styled.div`
    background-color: rgb(255, 255, 255);
    padding: 10px;
`;