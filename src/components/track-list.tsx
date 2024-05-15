import { msToMinutesAndSeconds } from "@/helpers"

export default async function TrackList({ tracks }) {

  return (
  <div>
    {tracks.map(song => (
      <div className="flex w-1/2 justify-between">
      <p>{song.name}</p>
        <p>{msToMinutesAndSeconds(song.duration_ms)}</p>
      </div>
    ))}
    </div>
  )
}
