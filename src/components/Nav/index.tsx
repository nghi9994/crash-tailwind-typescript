import React, { useState } from 'react'
import { BiHomeAlt, BiMoviePlay, BiInfoCircle, BiMenu } from 'react-icons/bi'
import NavItem from './NavItem';

const defaultIconSize = '1.875rem';

const items = [
  {label: 'Home', icon: <BiHomeAlt size={defaultIconSize} />, active: true},
  {label: 'Movies', icon: <BiMoviePlay size={defaultIconSize} />},
  {label: 'About', icon: <BiInfoCircle size={defaultIconSize} />}
]

const NavItemContainer = () => (
  <>
    {items.map((item, index) => <NavItem item={item} key={index} />)}
  </>
)

const Nav = () => {
  const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false)
  return (
    <nav className='col-span-1 bg-cyan-200'>
      <div className='flex justify-between items-center mx-4 md:block'>
        <h4 className='border-primary border-b font-bold py-4 text-primary text-right uppercase'>
          Phimmoi.net
        </h4>
        <BiMenu
          className='cursor-pointer md:hidden'
          size={defaultIconSize}
          onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
        />
      </div>

      <ul className={`mx-4 my-2${isNavMenuMobileOpen ? '' : ' hidden'} md:block`}>
        <NavItemContainer />
      </ul>
    </nav>
  )
}

export default Nav
