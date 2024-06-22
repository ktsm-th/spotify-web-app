import { auth } from "../auth"

export default async function trackTileProfile({ track }) {
  const session = await auth()

  if (!session.user) return null

  return (
    <div className="flex flex-col justify-center align-center max-w-[192px] bg-zinc-800 p-2 rounded">
      <a href={`/${track.id}`}>
        <img src={track.album.images[0].url} alt="Album Art" className="rounded w-48 h-48 flex" />
        <p className="flex mt-2 font-bold truncate text-ellipsis">{track.name}</p>
        <p className="flex text-sm truncate text-ellipsis">{track.artists[0].name}</p>
      </a>
    </div>
  )
}
