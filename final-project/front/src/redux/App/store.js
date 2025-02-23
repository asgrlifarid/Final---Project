import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { gamesApi } from "../services/gamesApi";
import wishlistReducer from "../features/wishlistSlice";
import { usersApi } from "../services/usersApi";
import { authApi } from "../services/authApi";
import { tournamentApi } from "../services/tournamentApi";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
   
    [gamesApi.reducerPath]: gamesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [tournamentApi.reducerPath]: tournamentApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      gamesApi.middleware,
      usersApi.middleware,
      authApi.middleware,
      tournamentApi.middleware,
     
    ),
});

setupListeners(store.dispatch);
