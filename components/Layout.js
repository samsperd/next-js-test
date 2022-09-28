import Nav from './Nav'
import Meta from './Meta'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import { useRouter } from 'next/router'

const Layout = ({children}) => {
  
  const router =  useRouter()
  


  return (
    <>
      <Meta></Meta>
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header></Header>
          { children }
        </main>
        <style jsx>
            {`
              main {
                align-items: ${router.pathname === '/users' && 'unset' || router.pathname === '/users/[id]' && 'unset'}
              }`
            }
        </style>
      </div>

    </>
  )
}

export default Layout