import { msToMinutesAndSeconds } from "@/helpers"

export default async function TrackList({ tracks }) {

  return (
  <div>
    {tracks.map((song, key) => (
      <div className="flex w-10/12 justify-between items-center px-4 rounded-md hover:bg-zinc-900">
        <p className="mr-4">{key+1}</p>
        <img className="p-2 rounded-[12px] mr-4" src={song.album.images[0].url} alt={`${song.album.name}`} style={{ maxWidth: '60px', height: 'auto' }} />
        <p class="w-1/3 truncate text-ellipsis ">{song.name}</p>
        <p className="text-zinc-500 truncate text-ellipsis w-1/3 ml-5">{song.album.name}</p>
        <p className="w-1/3 text-right ml-1">{msToMinutesAndSeconds(song.duration_ms)}</p>
      </div>
    ))}
    </div>
  )
}

//@todo - add link to album to redirect to album page, needs to handle from album or artist response
