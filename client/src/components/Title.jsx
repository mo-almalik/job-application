import React from 'react'
import { Helmet } from 'react-helmet-async'

function Title({title}) {
  return <>
  <Helmet>
    <title>{title}</title>
    <meta name="description" content="Job Platform" />
    <meta name="keywords" content="Job, Application, React, Redux, Node, Express, MongoDB" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Job Platform" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content="Job Platform" />
  </Helmet>

  <h3 className='text-gray-800 font-semibold  '>
    {title}
  </h3>
    
  </>
}

export default Title