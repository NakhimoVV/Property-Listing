import type { House } from '@/entities/house/model/types.ts'
import { API_URL } from '@/shared/config/api.ts'

export async function getHouses(): Promise<House[]> {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('Failed to fetch all houses!')
  return res.json()
}
