import ArtistTileProfile from "@/components/artist-tile-profile";
import TrackTileProfile from "@/components/track-tile-profile";
import { auth } from "../../auth"
import { fetchFromSpotify } from "@/helpers";
import { FastAverageColor } from 'fast-average-color';

export default async function Profile() {

    const session = await auth()
    const artistData = await fetchFromSpotify('https://api.spotify.com/v1/me/top/artists')
    const trackData = await fetchFromSpotify('https://api.spotify.com/v1/me/top/tracks')
    const userData = await fetchFromSpotify('https://api.spotify.com/v1/me/')

  const fac = new FastAverageColor();
    await fac.getColorAsync('https://i.pinimg.com/originals/da/e3/f6/dae3f6c9e213f125027519498f936fd5.jpg')
        .then(color => {
           console.log(color)
        })
        .catch(e => {
            console.log(e);
        });

    return (
      <main className="flex min-h-screen flex-col items-center background">
        <div className="w-full bg-zinc-900 flex grid-cols-2">
          <div className="p-4">
            <img src={userData.images[1].url} alt="User Avatar" id="asdf" className="rounded-full h-72 w-72" />
          </div>
          <div className="py-4  flex flex-col justify-center">
            <p className="start font-bold text-6xl">{session.user.name}</p>
            <p className=" start text-xs">{userData.followers.total} followers</p>
          </div>
        </div>
        <div className="flex flex-col ml-4 mt-4">
            <p className="my-4 flex font-extrabold text-xl">Top artists this month</p>
          <div className="flex flex-wrap grid-cols-4 gap-4 max-h-[250px] overflow-hidden">
            {artistData.items.slice(0, 10).map(artist => (
              <ArtistTileProfile
                artist={artist}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col ml-4 mt-4">
            <p className="my-4 flex font-extrabold text-xl">Top tracks this month</p>
          <div className="flex flex-wrap grid-cols-4 gap-4 max-h-[250px] overflow-hidden">
            {trackData.items.slice(0, 10).map(track => (
              <TrackTileProfile
                track={track}
              />
            ))}

          </div>
        </div>
      </main>
    );
  }
