import Image from 'next/image';
import NavbarLink from './navbar-link';
import { fetchFromSpotify } from "@/helpers";

export default async function Navbar() {

const userData = await fetchFromSpotify('https://api.spotify.com/v1/me/')

  return (
    <nav>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-zinc-500 rounded-lg sm:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" className="fixed top-0 right-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidenav">
        <div className="overflow-y-auto py-5 px-3 h-full bg-zinc-900/75 border-zinc-900 flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <img src={userData.images[1].url} alt="User Avatar" className="rounded-full h-24 w-24" />
            <h3 className=" start font-bold text-lg mt-2">{userData.display_name}</h3>
            <h3 className=" start text-xs">{userData.followers.total} followers</h3>
          </div>
            <ul className="pt-5 mt-5 space-y-2 border-t border-zinc-800">
              <NavbarLink link="/profile" text="Profile"/>
              <NavbarLink link="/profile" text="Top Artists"/>
              <NavbarLink link="/profile" text="Top Songs"/>
            </ul>
            <ul className="pt-5 mt-5 space-y-2 border-t border-zinc-800">
                  <NavbarLink link="/profile" text="Logout"/>
          </ul>
          <div className="flex justify-center h-full">
            <Image src="/favicon.png" width="96" height="96" className="grayscale opacity-[.15] self-end"/>
          </div>

        </div>
      </aside>
    </nav>
  )
}
