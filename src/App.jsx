import { createContext, useState } from 'react'
import { Header } from './components/navbar/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { SimpleRegistrationForm } from './components/SignUp/Signup'
import { Login } from './components/SignUp/Login'
import { useOutlet } from 'react-router-dom'
import { Welcome } from './components/Welcome'

export const AppContext = createContext()

function App() {
  const [isMounted, setIsMounted] = useState(true)
  const [isAuth, setIsAuth] = useState(false)
  const [isNewUser, setIsNewUser] = useState(false)

  const outlet = useOutlet()

  return (
      <AppContext.Provider value = { {isMounted, setIsMounted, isAuth, setIsAuth, setIsNewUser}}>  
        { isAuth ? ( 
            <div className='flex h-full w-full overflow-visible'>
              {isMounted && <Sidebar />}
              <div className='flex flex-col h-full w-full overflow-visible'>
                <Header />
                {outlet || <Welcome />}
              </div>
            </div> 
          )
          : (
              isNewUser ? (
                <SimpleRegistrationForm />
              ) : (
                <Login />
              )
          )
        }
      </AppContext.Provider>
  )
}

export default App
