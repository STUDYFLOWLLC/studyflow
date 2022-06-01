import { request, RequestDocument } from 'graphql-request'

export const fetcher = (query: RequestDocument) =>
  request('/api/graphql', query)

export const fetcherWithVariables = (query: RequestDocument, variables: any) =>
  request('/api/graphql', query, variables)
