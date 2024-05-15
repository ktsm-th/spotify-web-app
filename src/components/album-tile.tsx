import { auth } from "../auth"
import { fetchFromSpotify } from "@/helpers";

export default async function AlbumTile({ album }) {
  const session = await auth()

  if (!session.user) return null
  return (
    <div className="flex flex-col justify-center align-center">
      <p>{album.name}</p>
      <img src={album.images[0].url} alt={`${album.name} Album Art`} className="w-48 h-48 flex" />
    </div>
  )
}
