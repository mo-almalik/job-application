
import { RouterProvider } from 'react-router-dom'
import Routers from './routers/router'
import { AuthProvider } from './context/AuthContext'
import { Provider } from 'react-redux'
import { store } from './store'
import { ConfigProvider } from 'antd'
import { Bounce, ToastContainer } from 'react-toastify'


function App() {


  return (
    <>
    <ConfigProvider
   theme={{
    token:{
      colorPrimary :"#10B981",
      fontFamily :'Alexandria',
      fontSize :'16px',
    },
    components:{
      Table:{
        headerBg:'#eee',
         padding:18,
         
      }
    }
   }}
    >
     <Provider store={store}>
     <AuthProvider>
       <RouterProvider router={Routers} />
       <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      />
     </AuthProvider>
     </Provider>
    </ConfigProvider>

    </>
  )
}

export default App
