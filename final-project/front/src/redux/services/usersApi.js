import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
    }),
    getUsersById: builder.query({
      query: (id) => `users/${id}`,
    }),
    deleteUsers: builder.mutation({
      // DELETE işlemi mutation olmalı
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
    postUsers: builder.mutation({
      // POST işlemi mutation olmalı
      query: (payload) => ({
        url: `users`,
        method: "POST",
        body: payload,
      }),
    }),
    editUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    banUser: builder.mutation({
      query: ({ id, banDuration }) => ({
        url: `/users/ban/${id}`,
        method: "POST",
        body: { banDuration },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUsersQuery,
  useGetUsersByIdQuery,
  useDeleteUsersMutation, // Güncellendi
  usePostUsersMutation, // Güncellendi
  useBanUserMutation, 
  useEditUserMutation,
} = usersApi;
