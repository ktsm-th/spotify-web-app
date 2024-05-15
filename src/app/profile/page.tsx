import ArtistTileProfile from "@/components/artist-tile-profile";
import { auth } from "../../auth"
import { fetchFromSpotify } from "@/helpers";

export default async function Profile() {

    const session = await auth()
    const artistData = await fetchFromSpotify('https://api.spotify.com/v1/me/top/artists')
    const userData = await fetchFromSpotify('https://api.spotify.com/v1/me/')

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 background">
        <div className="w-full max-w-5xl rounded-lg bg-zinc-900 flex grid-cols-2">
          <div className="p-4">
            <img src={userData.images[1].url} alt="User Avatar" className="rounded-lg h-72 w-72" />
          </div>
          <div className=" py-4">
            <h3 className="uppercase start font-extrabold text-2xl">{session.user.name}</h3>
          </div>
        </div>
        <h1 className="mt-4 flex justify-center font-extrabold text-2xl">TOP ARTISTS</h1>
        <div className="mt-4 flex flex-wrap grid-cols-4 gap-4 justify-center max-w-5xl">

          {artistData.items.map(artist => (
            <ArtistTileProfile
              artist={artist}
            />
          ))}
        </div>
      </main>
    );
  }
