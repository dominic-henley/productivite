import { cookies } from 'next/headers'
import SpotifyPlayer from './SpotifyPlayer'

export default async function SpotifyWrapper() {

  const token = cookies().get('productivite-token')?.value

  return (
    <SpotifyPlayer token={ token } />
  )
}