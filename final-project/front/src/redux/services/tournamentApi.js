import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const tournamentApi = createApi({
  reducerPath: "tournamentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getTournaments: builder.query({
      query: () => "tournaments",
    }),
    getTournamentById: builder.query({
      query: (id) => `tournaments/${id}`,
    }),
    deleteTournaments: builder.mutation({
      query: (id) => ({
        url: `tournaments/${id}`,
        method: "DELETE",
      }),
    }),
    postTournaments: builder.mutation({
      query: (payload) => ({
        url: "tournaments",
        method: "POST",
        body: payload,
      }),
    }),
    editTournaments: builder.mutation({
      
      query: ({ id, test }) => {
       
        
        return {
          url: `tournaments/${id}`,
          method: "PATCH",
          body: test,
        };
      },
    }),
  }),
});

// Hook'ları dışa aktar
export const {
 useGetTournamentsQuery ,
 useGetTournamentByIdQuery ,
 useDeleteTournamentsMutation ,
 usePostTournamentsMutation ,
 useEditTournamentsMutation
} = tournamentApi;
