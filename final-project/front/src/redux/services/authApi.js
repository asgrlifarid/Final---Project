import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "login",
        method: "POST",
        body: payload,
      }),
    }),
    regUser: builder.mutation({
      query: (payload) => ({
        url: "register",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegUserMutation } = authApi;
