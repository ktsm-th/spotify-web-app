
import { fetchFromSpotify, msToMinutesAndSeconds } from "@/helpers";
import AlbumTile from "@/components/album-tile";
import Carousel from "@/components/carousel";
import TrackList from "@/components/track-list";

export default async function ArtistPage({ params }: { params: { id: string } }) {

  const albumData = await fetchFromSpotify(`https://api.spotify.com/v1/albums/${params.id}`)

    return (
      <main className="min-h-screen flex-col items-center justify-between background grid grid-cols-6">
        <div className="col-span-2">
          <img src={albumData.images[0].url} alt="User Avatar" className="object-cover h-screen flex"/>
        </div>
        <div className="ml-6 mt-6 col-span-4 h-full">
          <div className="mb-6 justify-left">
            <p className="flex mt-2 font-bold text-6xl">{albumData.name}</p>
            <p className="flex mt-2 text-3xl">{albumData.artists[0].name}</p>
            <p className="flex justify-left mt-2">{albumData.genres}</p>
          </div>
          <div>
            <TrackList
              tracks={albumData.tracks.items}
            />
          </div>
      </div>

      </main>
    );
}
