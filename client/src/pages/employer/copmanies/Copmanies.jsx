import React from 'react'
import { useDeleteCompanyMutation, useGetMyCompanyQuery } from '../../../features/copmaniesSlice'
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import { CirclePlus, Edit2, Eye, IdCard, Trash, Trash2, TypeOutline } from 'lucide-react';
import MyTable from '../../../components/MyTable';
import { companies } from '../../../utils/Table';
import { Link } from 'react-router-dom';
import { Empty, Popconfirm } from 'antd';
import { toast } from 'react-toastify';


function Copmanies() {
    // git companies
    const {data,isLoading,isError,error} = useGetMyCompanyQuery()
   const  [deleteCompany] = useDeleteCompanyMutation()

    const confirm = async (id)=>{
      const res = await deleteCompany(id)
      if(res.data?.status === 'success'){
        toast.success(res.data?.message);
      }else{
        toast.error('حدث خطأ اثناء الحذف');
      }
       
    }

    const total = data?.data.length
 console.log(data?.data);
 
const dataSource = data?.data.map((el)=>({
    key: el._id,
    name: el.name,
    logo: <img width={50} height={50} src={el.logo} alt={el.name} />,
    email: el.email,
    phone: el.phone,
    address: el.address,
   actions: (
    <div className='flex items-center gap-x-3 text-gray-600'>
        <Popconfirm
            title="حذف الشركة"
            description="هل أنت متأكد من الحذف؟"
            onConfirm={() => confirm(el._id)}
            onCancel={() => {}}
            okText="نعم"
            cancelText="إلغاء"
        >
            <button className='hover:text-gray-800' title="حذف">
                <Trash2 size={18} />
            </button>
        </Popconfirm>
        <button className='hover:text-gray-800' title="تعديل">
            <TypeOutline size={18} />
        </button>
        <Link className='hover:text-gray-800' to={`/dashboard/company-profile/${el._id}`} title="عرض">
            <Eye size={18} />
        </Link>
    </div>
)

  
}))
 

  return <>
   <div className='flex justify-between items-center '>
   <Title title={'الشركات'} />
   <Link to={'/dashboard/add-company'}>
    
   <Button>
     <CirclePlus />
     إنشاء شركة جديدة
   </Button>
   </Link>
   </div>

  {total == 0 ? <Empty className='my-10'
   description='لا توجد شركات متاحة حاليا'

  
    /> : <> 
  
    <MyTable columns={companies}
    dataSource={dataSource}
      total={data?.data }
       pagination={false}
       isLoading={isLoading}

       />

       </>}
 

  </>
}

export default Copmanies