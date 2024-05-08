import { auth } from "../auth"

export default async function UserAvatar() {
  const session = await auth()
  if (!session.user) return null

  return (
    <div>
      <code>
        {session.user.name}<br/>
        {session.user.email}
      </code>
      <img src={session.user.image} alt="User Avatar" />
    </div>
  )
}
