import NavItem from '../NavItem'

const NavList: React.FC = () => (
  <ul className="flex">
    <NavItem href="/">Home</NavItem>
    <NavItem href="/login">Login</NavItem>
    <NavItem href="/alquilar">Alquilar</NavItem>
    <NavItem href="/rentar">Rentar</NavItem>
  </ul>
)

export default NavList
