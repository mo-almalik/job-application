import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetApplicationByJobIdQuery } from '../../features/applicationSlice'
import { Helmet } from 'react-helmet-async'
import Title from '../../components/Title'

function JobDetails() {
    const {id} = useParams()
    const {data,isLoading,isError,error} = useGetApplicationByJobIdQuery(id)
    const details = data?.data
    console.log(details);
    

    
  return <>
    <div>
       <Title title={details?.title} />
    </div>
  </>
}

export default JobDetails