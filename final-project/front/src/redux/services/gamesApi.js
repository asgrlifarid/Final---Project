import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => "games",
    }),
    getGamesById: builder.query({
      query: (id) => `games/${id}`,
    }),
    deleteGames: builder.mutation({
      query: (id) => ({
        url: `games/${id}`,
        method: "DELETE",
      }),
    }),
    postGames: builder.mutation({
      query: (payload) => ({
        url: "games",
        method: "POST",
        body: payload,
      }),
    }),
    editGames: builder.mutation({
      query: ({ id, ...payload }) => ({
        url: `games/${id}`,
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});


export const {
  useGetGamesQuery,
  useGetGamesByIdQuery,
  useDeleteGamesMutation,
  usePostGamesMutation,
  useEditGamesMutation,
} = gamesApi;
