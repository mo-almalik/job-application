import React from 'react';
import { useGetJobsQuery } from "../../features/jobSlice.js";
import { ArrowLeft, Bookmark, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Jobs = () => {
    const baseUrl = 'http://localhost:5000'
    const { data } = useGetJobsQuery({})
    const jobs = data?.data?.docs
    return <>
        <div className={'container px-10 md:mx-auto  my-24'}>
            {/*    header */}
            <div className='flex items-center justify-between mb-12'>
                <h2 className='title'>احدث الوظائف</h2>
                <Link to={'/jobs'} className='border border-green-200 rounded-md text-[13px] p-2 px-3 text-primary flex items-center gap-x-2'>
                    عرض الكل
                    <ArrowLeft size={15} />
                </Link>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
                {jobs && jobs.map((job) => (
                    <div key={job._id} className={'hover:bg-gradient-to-l from-yellow-50 to-transparen border border-gray-200 rounded-md flex flex-col p-6 gap-y-5 '}>
                        {/* job details */}
                        <div>
                           <Link to={`/job/${job._id}`} >
                           <h2>{job.title}</h2>
                           </Link>
                            <div className='flex items-center gap-x-2 mt-2'>
                                <h4 className='bg-green-500 bg-opacity-10 px-2 text-green-500'>{job.jobType}</h4>
                                {job.salary && <span className='text-gray-400 text-sm'>راتب : {job?.salary.toLocaleString('ar-SA')}</span>}
                            </div>
                        </div>

                        {/* company details */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-x-3'>
                                <div className='bg-[#EDEFF5] p-1 rounded-md'>
                                    <img src={`${baseUrl}/${job.companyId.logo}`} className='w-[48px] h-[48px] rounded-md' alt={job.companyId.name} />
                                </div>
                                <div>
                                  <Link to={`/company/${job.companyId._id}`}>
                                  <h2>{job.companyId.name}</h2>
                                  </Link>
                                    <p className='text-gray-400 flex items-center'>
                                        <MapPin size={18} className='text-gray-500' />
                                        {job.location.country} , {job.location.region}
                                    </p>
                                </div>
                            </div>

                            <div className='text-gray-400'>
                                <Bookmark className='cursor-pointer hover:text-yellow-400' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
};

export default Jobs;