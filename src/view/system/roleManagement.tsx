import { Button, Table } from "antd"
import { ColumnsType } from "antd/lib/table";
import styled from 'styled-components';

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
            return <Button type={'link'}>修改</Button>
        }
    }
]

export default function RoleManagement() {
    return (
        <Containor>
            <Table size={'small'} bordered columns={columns} dataSource={list} ></Table>
        </Containor>
    )
}


const Containor = styled.div`
    min-height: 100%;
    background-color: rgb(255, 255, 255);
    padding: 20px;
`;