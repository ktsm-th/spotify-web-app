import { auth } from "./auth";

export async function fetchFromSpotify(url:string,) {
  const session = await auth()
  if (session && !session.user) return null

  const response = await fetch(url, {
    headers: {
      "Authorization": `Bearer ${session.accessToken}`,
    },
  })

  if (!response.ok) {
    console.log(response);
    // throw new Error('Failed to fetch');
  }

  const data = await response.json();

  return data
}

export function msToMinutesAndSeconds(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
