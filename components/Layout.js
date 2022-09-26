import Nav from './Nav'
import Meta from './Meta'
import styles from '../styles/Layout.module.css'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
      <Meta></Meta>
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header></Header>
          { children }
        </main>
      </div>

    </>
  )
}

export default Layout