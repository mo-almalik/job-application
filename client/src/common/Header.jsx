import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useLogoutMutation } from '../features/authApi'
import { useNavigate } from 'react-router-dom'


function Header() {
    const {user} = useAuth()
    const [logout] = useLogoutMutation()
    const navigate = useNavigate()
    
    const handleLogout = async () => {
        await logout()
  navigate('/login')
    }
  return ( 
    <div className='h-[60px] flex items-center justify-between border-b-[1px]  px-10 '>
      <div>
        <button>Toggle Sidebar</button>
      </div>

      <div>
        {user && (
            <>
           <div className='flex items-center ga-x-3'>
           <div>{user.name}</div>
           <button onClick={handleLogout}>Logout</button>
           </div>
            </>
        )}
      </div>
    </div>
  )
}

export default Header