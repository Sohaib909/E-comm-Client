import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
    credentials: "include",
  }),
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({
    getHealth: builder.query({ query: () => "/health" }),
  }),
});

export const { useGetHealthQuery } = api;
