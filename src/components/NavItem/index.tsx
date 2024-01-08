import Link from 'next/link'

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <li className="mx-4">
    <Link href={href}>
      <p className="text-gray-700 hover:text-blue-500 transition duration-300">
        {children}
      </p>
    </Link>
  </li>
)

export default NavItem
