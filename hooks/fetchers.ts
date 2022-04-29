import { request } from 'graphql-request'

export const fetcher = query => request('/api/graphql', query)

export const fetcherWithVaribles = (query, variables) =>
  request('/api/graphql', query, variables)
