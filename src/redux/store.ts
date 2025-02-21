import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authReducer from "./feature/auth/authSlice";

import {
  persistReducer,
  persistStore,
  
} from "redux-persist";
import { baseApi } from "./api/baseApi";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    // planSelection: planSelectionReducer,
    // scriptDetails: scriptDetailsReducer,
    // actorDetails: actorDetailsReducer,
    // videoEditingDetails: videoEditingDetailsReducer,
    // orderDetails: orderDetailsReducer,
    // creditPricingPlan: creditPricingPlanReducer,
    // global: globalReducer,
    // sidebar: sidebarReducer,
    // templateVideoBrief : templateVideoBriefReducer, 
    // templateActorDetails : templateActorReducer, 
    // templateVideoEdit : templateVideoEditReducer, 
    // templateDetails : templateDetailsReducer, 
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      //   ignoredPaths: [],
      // },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
