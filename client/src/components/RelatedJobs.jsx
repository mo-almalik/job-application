import React from 'react'

function RelatedJobs({category}) {
    const relatedJobs = [
      { title: 'Senior Software Engineer', company: 'ABC Corp.', location: 'New York' },
      { title: 'Frontend Developer', company: 'XYZ Inc.', location: 'Los Angeles' },
      { title: 'Project Manager', company: 'PQR Solutions', location: 'Chicago' },
    ]
  return <>
    <h3 className='text-gray-800 text-md my-5'>الوظائف مشابهة : </h3>  

    <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
        {relatedJobs.map((job) => (
          <div key={job.title} className={'hover:bg-gradient-to-l from-yellow-50 to-transparen border border-gray-200 rounded-md flex flex-col p-6 gap-y-5 '}>
            <h4 className='text-gray-600 text-sm'>{job.title}</h4>
            <p className='text-gray-500 text-xs'>{job.company}, {job.location}</p>
          </div>
        ))}
    </div>

  </>
}

export default RelatedJobs