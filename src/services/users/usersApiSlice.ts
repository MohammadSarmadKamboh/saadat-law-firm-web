import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/interfaces/interfaces";

export const usersApiSlice = createApi({
  reducerPath: "usersFromApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users", // Endpoint for fetching users
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
