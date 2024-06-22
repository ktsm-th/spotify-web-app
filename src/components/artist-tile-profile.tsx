import { auth } from "../auth"

export default async function ArtistTileProfile({ artist }) {
  const session = await auth()

  if (!session.user) return null

  return (
    <div className="flex flex-col justify-center align-center max-w-[192px]">
      <a href={`/artist/${artist.id}`}>
        <img src={artist.images[0].url} alt="User Avatar" className="rounded-full w-48 h-48 flex" />
        <p className="flex mt-2 font-bold truncate text-ellipsis">{artist.name}</p>
        <p className="flex text-sm truncate text-ellipsis">{artist.followers.total} followers</p>
      </a>
    </div>
  )
}
