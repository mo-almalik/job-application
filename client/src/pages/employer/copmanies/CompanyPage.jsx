import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCompanyQuery } from '../../../features/copmaniesSlice'
import CompanyProfile from '../../../components/CompanyProfile'

function CompanyPage() {
    const {id} = useParams()
    const {data,isLoading,isError,error} = useGetCompanyQuery(id)
    const company = data?.data
    
    console.log(company);
  return <>
    
    <CompanyProfile data={company} />
  </>
}

export default CompanyPage