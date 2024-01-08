import { api } from '@/lib/api'
const auth = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: body => ({
        url: `auth/login`,
        method: 'POST',
        body
      })
    }),
    //
    verify: build.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: body => ({
        url: `auth/verify`,
        method: 'POST',
        body
      })
      // Pick out data and prevent nested properties in a hook or selector
      // onQueryStarted is useful for optimistic updates
      // The 2nd parameter is the destructured `MutationLifecycleApi`
    }),
  }),

  overrideExisting: true
})

export const {
  useLoginMutation,
  useVerifyMutation,
  endpoints: authEndpoints
} = auth
