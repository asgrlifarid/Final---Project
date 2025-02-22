import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tourregApi = createApi({
  reducerPath: "tourregApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    registerTournament: builder.mutation({
      query: ({ username, password, tournamentId }) => ({
        url: "/registertournament", // API route
        method: "POST",
        body: { username, password, tournamentId },
      }),
    }),
  }),
});

export const { useRegisterTournamentMutation } = tourregApi;
