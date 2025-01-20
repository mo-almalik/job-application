import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLogoutMutation } from '../features/authApi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const {user} = useAuth()
    const [logout] = useLogoutMutation()
    const navigate = useNavigate()
    
    const handleLogout = async () => {
        await logout()
        navigate('/login')
    }
    
//  nav menu
    const menuItems = [
        {name: 'الرئيسية', path: '/'},
        {name: 'الوظائف', path: '/about'},
        {name: 'اتصل  بنا', path: '/contact'},
    ];
    const AuthMenu =[
        {name: 'تسجيل الدخول', path: '/login'},
        {name: 'تسجيل الحساب', path: '/register'}
    ]
    const isAcsses =[
        {name: 'تسجيل الخروج', path: '/logout' , onclick :handleLogout},
        {name: 'الملف الشخصي', path: '/profile'},
        {name: '',path:'/saved-jobs'},
        {name: '',path:'/favorites'},
    ]
    return <>
        <div className={'bg-white   py-5 '}>

        <nav className={'container mx-auto '}>
            <div className='flex justify-between items-center'>
                <h3> انطلاق</h3>
                <ul className='flex gap-x-10'>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.path}>{item.name}</a>
                        </li>
                    ))}
                    {AuthMenu.map((item, index) => (
                        <li key={index}>
                            <a href={item.path}>{item.name}</a>
                        </li>
                    ))}
                    {user &&  
                    <>
                    {isAcsses.map((item, index) => (
                        <li key={index}>
                            <a href={item.path} onClick={item.onclick}>{item.name}</a>
                        </li>
                    ))}
                    </>
                    }
                </ul>
            </div>
        </nav>
        </div>
    </>
};

export default Navbar;