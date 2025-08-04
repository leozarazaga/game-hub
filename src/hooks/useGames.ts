import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { type FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import type { Game } from "../entities/Game";


const apiClient = new APIClient<Game>("/games");

const useGames = () => {
    const gameQuery = useGameQueryStore((selector) => selector.gameQuery);

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        initialPageParam: 1,
        queryFn: ({ pageParam }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam,
                },
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms("24h"),
    });
};

export default useGames;
