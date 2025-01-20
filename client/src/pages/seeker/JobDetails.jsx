import { Breadcrumb, Modal } from 'antd'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useGetOneJobQuery } from '../../features/jobSlice'
import { Bookmark, CalendarClock, DollarSign, Frown, HandCoins, MapPin, Smile } from 'lucide-react'
import dayjs from 'dayjs'
import RelatedJobs from '../../components/RelatedJobs'
import Apply from '../../components/Apply'

function JobDetails() {
  const base =import.meta.env.VITE_BASE
   
    const {id} = useParams()
    const {data,isLoading,isError}= useGetOneJobQuery(id)



    const job = data?.data
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading job details</div>;
  return <>
    <Helmet>
        <title> انطلاق - {job?.title}</title>
    </Helmet>


     <div className='bg-gray-100 p-3 my-8'>
     <Breadcrumb items={[
        {title: 'الرئيسية' , href:'/'},
        {title: 'وظائف', href:'/jobs'},
        {title: ` ${job?.title}`, }  
    ]}
    className=' container px-10 md:mx-auto hover:bg-none'
     /> 
     </div>
    <div className='container px-10 md:mx-auto my-10'>
     <div className='flex flex-col gap-4 md:flex-row justify-between items-center text-center md:text-right'>
     {/* company and job title */}
      <div className='flex flex-col md:flex-row items-center gap-x-3'>
      <div className='bg-[#EDEFF5] p-0.5 rounded-md'>
        <img 
        src={`${base}/${job?.companyId?.logo}`}
         alt={job?.companyId?.name}
          className='w-20 h-20 rounded-full' />
      
      </div>
      <div className='flex flex-col gap-y-2'>
        <h2 className='text-gray-700'>{job?.title}</h2>
        <div className='flex items-center gap-x-3'>
          <p className='text-gray-600'>{job?.companyId?.name}</p>
          <h4 className='bg-green-500 bg-opacity-10 px-2 text-green-500'>{job.jobType}</h4>
        </div>
      </div>

      </div>

      
      {/* saved jobs and apply*/}
      <div className='text-gray-400 flex items-center gap-x-2 w-full md:w-fit '>
         <button className='text-primary bg-gray-100 cursor-pointer p-2  rounded-md hover:bg-primary hover:text-white transition-colors duration-150'><Bookmark size={18} /></button>
         <button className='bg-primary text-white px-5 py-2  rounded-md hover:bg-primary-600 text-sm transition-colors duration-200 w-full md:w-fit ' onClick={showModal}>تقدم</button>
       </div>

    
     </div>

     {/* discriptions */}
     <div className='flex flex-col md:flex-row my-10 lg:my-16 items-start gap-4'>
     <div className=' w-full md:w-full'>
       <h3 className='text-gray-800 text-md mb-5'>معلومات عن الوظيفة : </h3>
      
<div className='flex flex-col gap-y-8'>
<div>
      <h3>الوصف</h3>
        <p className='text-gray-600 leading-8'>{job?.description}</p>
      </div>
      <div>
      <h3>المتطلبات</h3>
        <p className='text-gray-600 leading-8'>{job?.requirements}</p>
      </div>
</div>

      <div>

      </div>
     </div>



     <div className=' w-full lg:w-1/3'>
      <div className='flex flex-col gap-y-5'>
      {/* salary and location */}
        <div className='border border-gray-200 rounded-md p-4 flex items-center justify-between px-5'>
          {job?.salary && 
            <div className='text-center flex flex-col items-center gap-y-2 w-1/2'>
            <h3><DollarSign  size={22} className='text-gray-500' /></h3>
            <p className='text-primary-600'>{job?.salary.toLocaleString('ar-SA')}</p>
          </div>
          }
          <div className='text-center flex flex-col items-center gap-y-2 w-1/2'>
            <h3><MapPin size={22} className='text-gray-500' /></h3>
            <p className='text-gray-500'>{job?.location.country} , {job?.location.region} </p>
          </div>
        </div>

          {/* skills */}
        <div className='border border-gray-200 rounded-md p-5'>
        <h3>المهارات المطلوبة</h3> 
        <div className='flex items-center flex-wrap justify-start gap-2 my-5'>
          {job?.skills?.map((skill) => (
            <div key={skill} className=''>
              <p className='text-primary text-sm bg-primary-100 p-1 rounded-md'>{skill}</p>
            </div>
          ))}
          </div>
        </div>

        {/* overview */}
        <div className='border border-gray-200 rounded-md p-5'>
          <h3>نظرة عامة على الوظيفة</h3>
          <div className='grid grid-cols-2 '>
            <div className=' p-3'>
              <h4>الحالة</h4>
              <div className={`mt-2 w-fit px-2 rounded-md text-sm`}>
              {job?.status === 'open' ? <div><Smile className='text-primary' /> {job?.status}</div> : <Frown className='text-red-500' />}
               </div>
            </div>
            <div className=' p-3 '>
              <h4><CalendarClock />  </h4>
              <p className='text-[12px] mt-2'>{dayjs(job?.createdAt).format('MMM D, YYYY')}</p>
            </div>

          </div>
        </div>

      </div>
     </div>

     </div>



     {/* related jobs */}
     <div className='my-20 border-t border-gray-200'>
       <RelatedJobs />
     </div>
    </div>

    {/* Modal */}
    <Modal
    title={`تقدم إلى الوظيفة : ${job.title}`}
    open={isModalOpen}
    onOk={handleOk}
    onCancel={handleCancel}
    cancelText="إلغاء"
    okText="تقدم"
    width={500}
    className='w-full max-w-screen-md'
    closable={false}
    >
    <Apply jobId={id} jobTitle={job?.title} />
    </Modal>
  </>
}

export default JobDetails