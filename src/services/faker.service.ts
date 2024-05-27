// export const getAllPost = async (): Promise<Array<Post>> => {
//   const API: string = "https://jsonplaceholder.typicode.com/posts";

//   const response = await fetch(API);
//   const resp = await response.json();

//   return resp;
// };

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "@/types";

export const fakerApi = createApi({
  reducerPath: "fakerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Array<Post>, void>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = fakerApi;
