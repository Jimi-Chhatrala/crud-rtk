import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://664d8c89ede9a2b55653ddd1.mockapi.io",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/crud-rtk",
      providesTags: ["User"],
    }),
    getUser: builder.query({
      query: (id) => `/crud-rtk/${id}`,
      providesTags: ["User"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/crud-rtk",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/crud-rtk/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/crud-rtk/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
