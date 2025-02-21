/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    BaseQueryApi,
    BaseQueryFn,
    DefinitionType,
    FetchArgs,
    createApi,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  import { RootState } from "../store";
  import { logOut, setUser } from "../feature/auth/authSlice";
  
  const baseUrl =
  import.meta.env.VITE_NODE_ENV === "development"
  ? import.meta.env.VITE_API_BASE_URL_DEV
  : import.meta.env.VITE_NODE_ENV === "stage"
  ? import.meta.env.VITE_API_BASE_URL_STAGE
  : import.meta.env.VITE_API_BASE_URL_PROD;
  const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: "include",
  
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
  });
  
  const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
  > = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
  
    if (result.error?.status === 401) {
      const res = await fetch(`${baseUrl}/auth/refresh-token`, {
        method: "POST",
        // credentials: "include",
      });
      const data = await res.json();
      if (data?.data?.accessToken) {
        const user = (api.getState() as RootState).auth.user;
  
        api.dispatch(
          setUser({
            user,
            token: data.data.accessToken,
          })
        );
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logOut());
      }
    }
  
    return result;
  };
  
  export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: [
     
    ],
    endpoints: () => ({}),
  });
  