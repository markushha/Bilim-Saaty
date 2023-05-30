import { client } from "../client";

export const useAuth = client.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, { email: string, password: string}>({
      query: ({ email, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: {
          email,
          password,
        }
      }),
    }),
  })
})

export const { useLoginMutation } = useAuth;

export const { endpoints: { login } } = useAuth;