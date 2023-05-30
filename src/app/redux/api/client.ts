import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const client = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (build) => ({/* endpoints are going to be injected */})
})
