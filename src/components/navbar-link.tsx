import Link from 'next/link';

type NavbarLinkProps = {
  link: string,
  text: string,
}

export default function NavbarLink({ link, text }: NavbarLinkProps) {
  return (
    <Link href={link}>
      <li className="flex items-center p-2 text-sm rounded-lg dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 group">
          <span>{text}</span>
      </li>
    </Link>
  )
}
