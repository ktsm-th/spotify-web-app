import Link from 'next/link';

type NavbarLinkProps = {
  link: string,
  text: string,
}

export default function NavbarLink({ link, text }: NavbarLinkProps) {
  return (
    <Link href={link}>
      <li className="text-center text-white font-bold bg-zinc-700 w-fit p-2 mr-2 h-8 flex justify-center items-center text-base lg:w-32 lg:mr-2 hover:opacity-70 hover:text-gray">
      {text}
      </li>
    </Link>
  )
}
