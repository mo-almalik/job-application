import React from 'react'

function CompanyProfile({data}) {
 
  return <>
    <div className='w-full rounded-md mb-10 h-[100px] md:h-[350px] relative' style={{
        backgroundImage: `url(${data?.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',}}>
            <div className='absolute -bottom-10 right-5 w-20 h-20 rounded-full  '>
               <div className='fle flex-col'>
               <img className='w-full h-full object-cover rounded-full bg-gray-100 border-1 border-gray-100' 
                src={data?.logo} alt='company logo' />
                
                <h2 className='font-bold text-gray-600'>{data?.name}</h2>
                
               </div>
            </div>

    </div>

    <div className='mt-20 '>
        <h3>الوصف</h3>
        <p>
            {data?.description}
        </p>

        
    </div>
  </>
}

export default CompanyProfile