import React, { useState } from 'react'
import { useGetApplicationsToEmpQuery } from '../../features/applicationSlice'
import { Helmet } from 'react-helmet-async'
import { Avatar, Card, Table } from 'antd'
import MyTable from '../../components/MyTable';
import dayjs from 'dayjs';

function Candidates() {
    const baseUrl = import.meta.env.VITE_BASE;
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const {data,isLoading,isError,error} = useGetApplicationsToEmpQuery({page,limit})
    const applications = data?.data?.docs
    const totalDocs = data?.data?.totalDocs
    const totalPages = data?.data?.totalPages

    const handlePage = async (newPage, newLimit) => {
        setPage(newPage);
        setLimit(newLimit);
    };
    
    const columns =[
        {
            title:'الصورة',
            dataIndex: 'avatar',
            key: 'avatar',
            width: '10%',
        },    
        {
        title: 'الاسم',
        dataIndex: 'name',
        key: 'name',
        width: '20%',
      
    },

    {
        title: 'تاريخ التقديم',
        dataIndex: 'createdAt',
        key: 'createdAt',
        width: '20%',
    },
    {
        title: 'الوظيفة',
        dataIndex: 'jobTitle',
        key: 'jobTitle',
        width: '20%',
    },
    {
        title: 'حالة الطلب',
        dataIndex: 'status',
        key: 'status',
        width: '10%',
    },

];

const dataSource = applications?.map((el)=>({
    avatar:<Avatar src={`${baseUrl}/${el.seekerId?.profileImage}`} alt={el.seekerId.name} size={50}/>,
    key: el._id,
    name: el.seekerId.name,
    createdAt: dayjs(el.createdAt).format('MMM D, YYYY'),
    jobTitle: el.jobId.title,
    status: el.status,
 
}))
  return <>
    <Helmet>
        <title>طلبات التقديم</title>
    </Helmet>

    <div className='w-full'>
 
            <MyTable   handlePage={handlePage} total={totalDocs} columns={columns} dataSource={dataSource} isLoading={isLoading} />
    
    </div>
  </>
}

export default Candidates