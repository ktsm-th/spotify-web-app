import NavbarLink from './navbar-link';
export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row justify-center py-3 bg-zinc-800">
        <NavbarLink link="/profile" text="PROFILE" />
      </ul>
    </nav>
  )
}
