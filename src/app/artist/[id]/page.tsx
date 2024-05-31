
import { fetchFromSpotify, msToMinutesAndSeconds } from "@/helpers";
import AlbumTile from "@/components/album-tile";
import Carousel from "@/components/carousel";
import TrackList from "@/components/track-list";
import Discography from "@/components/discography";

export default async function ArtistPage({ params }: { params: { id: string } }) {

  const artistData = await fetchFromSpotify(`https://api.spotify.com/v1/artists/${params.id}`)
  const albumData = await fetchFromSpotify(`https://api.spotify.com/v1/artists/${params.id}/albums?include_groups=album`)
  const singleData = await fetchFromSpotify(`https://api.spotify.com/v1/artists/${params.id}/albums?include_groups=single`)
  const topSongs = await fetchFromSpotify(`https://api.spotify.com/v1/artists/${params.id}/top-tracks`)

    return (
      <main className="min-h-screen flex-col items-center justify-between background grid grid-cols-6">
        <div className="col-span-2">
          <img src={artistData.images[0].url} alt="Artist Avatar" className="object-cover h-screen flex"/>
        </div>
        <div className="ml-6 col-span-4 h-full">
          <div className="mb-6 justify-left">
            <p className="flex mt-2 font-bold text-6xl">{artistData.name}</p>
            <p className="flex mt-2">{(artistData.followers.total).toLocaleString()} Followers</p>
            <p className="flex justify-left mt-2">{artistData.genres.map((genre) => (genre + ' | ')).join('').slice(0, -3)}</p>
            {/* <p className="flex justify-left mt-2">{artistData.genres.map((genre, index) => (index + 1 === artistData.genres.length) ? genre : genre + ' | ')}</p> */}
          </div>
          <div className="max-w-3xl">
            <h2 className="font-bold text-2xl">Top Songs</h2>
            <TrackList
              tracks={topSongs.tracks.slice(0, 5)}
            />
          </div>
          <Discography albumData={albumData} singleData={singleData} />
      </div>

      </main>
    );
}
