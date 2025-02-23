import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


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
    
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
    postUsers: builder.mutation({
   
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


export const {
  useGetUsersQuery,
  useGetUsersByIdQuery,
  useDeleteUsersMutation,
  usePostUsersMutation, 
  useBanUserMutation, 
  useEditUserMutation,
} = usersApi;
