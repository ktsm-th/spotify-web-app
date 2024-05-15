
import { fetchFromSpotify, msToMinutesAndSeconds } from "@/helpers";
import AlbumTile from "@/components/album-tile";
import Carousel from "@/components/carousel";
import TrackList from "@/components/track-list";

export default async function ArtistPage({ params }: { params: { id: string } }) {

  const artistData = await fetchFromSpotify(`https://api.spotify.com/v1/artists/${params.id}`)
  const albumData = await fetchFromSpotify(`https://api.spotify.com/v1/artists/${params.id}/albums?include_groups=album`)
  const albumImages = albumData.items.map(a => a.images[0].url)
  const topSongs = await fetchFromSpotify(`https://api.spotify.com/v1/artists/${params.id}/top-tracks`)

    return (
      <main className="min-h-screen flex-col items-center justify-between background grid grid-cols-6">
        <div className="col-span-2">
          <img src={artistData.images[0].url} alt="User Avatar" className="object-cover h-screen flex"/>
        </div>
        <div className="ml-6 mt-6 col-span-4 h-full">
          <div className="mb-6 justify-left">
            <p className="flex mt-2 font-bold text-6xl">{artistData.name}</p>
            <p className="flex mt-2">{(artistData.followers.total).toLocaleString()} Followers</p>
            <p className="flex justify-left mt-2">{artistData.genres}</p>
          </div>
          <div>
            <h2 className="font-bold text-3xl">TOP SONGS</h2>

            <TrackList
              tracks={topSongs.tracks}

            />
          </div>



          <div className="mt-4 flex flex-col grid-cols-4 gap-4 justify-center max-w-5xl ">
            <Carousel logos={albumImages} />
          </div>
      </div>

      </main>
    );
}
