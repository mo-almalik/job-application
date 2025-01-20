import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import JobView from '../../components/JobView'
import { useGetMyjobQuery } from '../../features/jobSlice'
import Title from '../../components/Title';


function Job() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const {data,isLoading,isError,error} = useGetMyjobQuery({ page, limit })

  const handlePage = async (newPage, newLimit) => {
    setPage(newPage);
    setLimit(newLimit);
};

  const totalDocs = data?.data?.totalDocs
 console.log(data?.data);
 
  return <>
    
    <div>
         <Title title={'الوظائف'}/>

        <div className='my-5'>
        
            {isError && <div>Error: {error?.message}</div>}

            <JobView isLoading={isLoading} items={data?.data?.docs}  handlePage={handlePage} total={totalDocs} />
        </div>
    </div>
  </>
}

export default Job