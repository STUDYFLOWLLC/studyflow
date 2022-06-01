import { fetcherWithVariables } from 'hooks/fetchers'
import useSWR from 'swr'

export default function setProfile() {
  const { data, error } = useSWR([], variables, fetcherWithVariables)
}
