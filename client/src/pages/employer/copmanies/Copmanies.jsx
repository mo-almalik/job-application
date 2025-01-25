import React from 'react'
import { useGetMyCompanyQuery } from '../../../features/copmaniesSlice'
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import { CirclePlus, Edit2, Eye, Trash, Trash2, TypeOutline } from 'lucide-react';
import MyTable from '../../../components/MyTable';
import { companies } from '../../../utils/Table';
import { Link } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_BASE
function Copmanies() {
    // git companies
    const {data,isLoading,isError,error} = useGetMyCompanyQuery()
   
    // handle if no company
    // view company
    // add company btn 
    // delete company btn
    // edit company btn
    // pagination
    // search company


const dataSource = data?.data.map((el)=>({
    key: el._id,
    name: el.name,
    logo: <img width={50} height={50} src={el.logo} alt={el.name} />,
    email: el.email,
    phone: el.phone,
    address: el.address,
    actions: <div className='flex items-center gap-x-3 text-gray-600 '>
       <button  className='hover:text-gray-800'>
        <Trash2 size={18} />
       </button>
       <button  className='hover:text-gray-800'>
       <TypeOutline size={18} />
        
       </button>
       <Link className='hover:text-gray-800' to={`/dashboard/company-profile/${el._id}`}>
        <Eye size={18} />
       </Link>
    </div>
  
}))
  return <>
   <div className='flex justify-between items-center '>
   <Title title={'الشركات'} />
   <Button>
     <CirclePlus />
     إنشاء شركة جديدة
   </Button>
   </div>


   {/* companies Table */}
   <MyTable columns={companies}
    dataSource={dataSource}
      total={data?.data }
       pagination={false}
       isLoading={isLoading}

       />
  </>
}

export default Copmanies