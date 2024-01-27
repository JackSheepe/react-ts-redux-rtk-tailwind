import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ServerResponse } from "../../models/models";
import { InfUser } from "../../models/models";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
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
  }),
});

export const { useSearchUsersQuery } = githubApi;
