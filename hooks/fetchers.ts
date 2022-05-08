import { request, RequestDocument } from 'graphql-request'

export const fetcher = (query: RequestDocument) =>
  request('/api/graphql', query)

export const fetcherWithVaribles = (query: RequestDocument, variables: any) =>
  request('/api/graphql', query, variables)
