import './Header.css'
import HeaderBottom from './HeaderBottom'
import HeaderTop from './HeaderTop'

function Header() {

  return (
    <div className='header'>
        <HeaderTop />
        <HeaderBottom />
    </div>
  )
}

export default Header