import React from 'react'

function NotFound() {
  return <>
    <h1>Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/">Go to Homepage</a>
    <p>Please check the URL and try again.</p>
    <p>If you believe this is a mistake, please contact support.</p>
    <p>Error Code: 404</p>
  </>
}

export default NotFound