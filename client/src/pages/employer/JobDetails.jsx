import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetApplicationByJobIdQuery } from '../../features/applicationSlice'
import { Helmet } from 'react-helmet-async'

function JobDetails() {
    const {id} = useParams()
    const {data,isLoading,isError,error} = useGetApplicationByJobIdQuery(id)
    const details = data?.data

    
  return <>
    <div>
      {/* <Helmet>
        <title>انطلاق - {details?.title}</title>
      </Helmet> */}
    </div>
  </>
}

export default JobDetails