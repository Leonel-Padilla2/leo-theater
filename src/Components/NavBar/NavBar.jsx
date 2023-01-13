import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from  '../../Images/logo.png'
import menuIcon from '../../Images/menu-icon.png'
import './NavBar.css'

/*Array which contains routes info in order to map it and show them.*/
const routes = [
  {
    route:'/',
    title: 'Home'
  },
  {
    route:'/movies',
    title: 'Movies'
  },
  {
    route:'/shows',
    title: 'Tv Shows'
  }
]

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false)

  const hanldeOnClick = () => {
    if (window.innerWidth <= 600){
      setIsMobile(current => !current)
    }
  }

  return (
    <div className={`navbar-container ${isMobile && 'mobile'}`}>
      <Link to={'/'}>
        <img className='navbar-logo' src={logo} alt="logo"/>
      </Link>

      <img className='navbar-button' src={menuIcon} alt='menu-logo' onClick={hanldeOnClick}/>
      
      <ul className='navbar-list'>
        {
          routes.map(({route, title}) => 
            <Link onClick={hanldeOnClick} key={route} to={route} className='navbar-item'>{title}</Link>
          )
        }
      </ul>
    </div>
  )
}

export default NavBar