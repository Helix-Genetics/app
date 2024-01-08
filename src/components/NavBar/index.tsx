import ActionButton from '../ActionButton'
import Logo from '../Logo'
import NavList from '../NavList'

const NavBar: React.FC = () => (
  <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-md">
    <Logo />
    <div className="block lg:flex lg:items-center lg:w-auto">
      <NavList />
    </div>
    <div className="mt-4 lg:mt-0">
      <ActionButton
        classList='bg-gray-900 hover:bg-purple-700 hover:text-white font-bold py-2 px-4 rounded'>
        Solicitar información</ActionButton>
    </div>
  </nav>
)

export default NavBar
