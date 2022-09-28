import Image from 'next/image'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <div className="logo">
          <Image src={'/logo.png'} width='40' height={'40'} alt=''></Image>
        </div>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>

            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/users'>All Users</Link>
            </li>            
        </ul>
    </nav>
  )
}

export default Nav