import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { gamesApi } from "../services/gamesApi";
import wishlistReducer from "../features/wishlistSlice";
import { usersApi } from "../services/usersApi";
import { authApi } from "../services/authApi";
import { tournamentApi } from "../services/tournamentApi";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    // Add the generated reducer as a specific top-level slice
    [gamesApi.reducerPath]: gamesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [tournamentApi.reducerPath]: tournamentApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      gamesApi.middleware,
      usersApi.middleware,
      authApi.middleware,
      tournamentApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
