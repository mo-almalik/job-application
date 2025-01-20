import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetApplicationByJobIdQuery } from '../../features/applicationSlice'
import { Helmet } from 'react-helmet-async'
import Title from '../../components/Title'

function JobDetails() {
    const {id} = useParams()
    const {data,isLoading,isError,error} = useGetApplicationByJobIdQuery(id)
    const details = data?.data
    const job = data?.job
    console.log(job);
    console.log(details);
    

    
  return <>
    <div>
       <Title title={job?.title} />
       <div>
        {/* company */}
       </div>
    </div>

      <div className='flex flex-col space-y-8 '>
        <div className='mt-5'>
            <h3>الوصف</h3>
            <p>{job?.description}</p>
        </div>
        <div>
            <h3>المتطلبات</h3>
            <p>{job?.requirements}</p>
        </div>
      </div>
  </>
}

export default JobDetails