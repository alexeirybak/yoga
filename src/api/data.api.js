import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const DATA_TAG = { type: "Data", id: "LIST" };
const BASE_URL = "https://yoga-2a129-default-rtdb.firebaseio.com/"
export const queryApi = createApi({
    reducerPath: 'queryApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (build) => ({
        getLikeSongs: build.query({
            query: (Mass) => ({
                url: 'favorite/all/',
                method: 'GET',
                headers: Mass,
            }),
            providesTags: (result = []) => [
                DATA_TAG,
            ],
        }),
        postLike: build.mutation({
            query: (access) => ({
                url: `${access[1].id}/favorite/`,
                method: 'POST',
                headers: access[0],
            }),
            invalidatesTags: [DATA_TAG]
        }),
        postDisLike: build.mutation({
            query: (access) => ({

                url: `${access[1].id}/favorite/`,
                method: 'DELETE',
                headers: access[0],
            }),
            invalidatesTags: [DATA_TAG]
        })
    })
})