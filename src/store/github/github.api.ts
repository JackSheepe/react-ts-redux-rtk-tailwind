import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { InfRepo, ServerResponse } from "../../models/models";
import { InfUser } from "../../models/models";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<InfUser[], string>({
      query: (search: string) => ({
        url: "search/users",
        params: {
          q: search,
        },
      }),
      transformResponse: (response: ServerResponse) => response.items,
    }),
    getUserRepos: build.query<InfRepo[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;
