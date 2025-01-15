import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {useAuth} from '../../context/AuthContext'
import { useLoginMutation } from '../../features/authApi';  
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../../utils/valiadtion';
 


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const [login, { isLoading, isError, error }] = useLoginMutation();
  const {setUser} = useAuth()
  const navigate = useNavigate()
  

  const onSubmit = async (data) => {
    try {
      const result = await login(data).unwrap();
 
      setUser(result.data);
      if (result.data.role === 'admin') {
        navigate('/admin');
      }else if (result.data.role === 'employer'){
        navigate('/dashboard');
      }else{
        navigate('/');
      }
    
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              email
            </label>
            <input
              id="email"
              {...register('email')}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password')}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          {isError && (
            <p className="text-red-500 text-sm mt-4 text-center">
              {error.data?.message || 'Login failed'}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;