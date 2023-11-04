import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery], // den siste er for å lage dependencies,
        queryFn: () =>
            apiClient
                .get<FetchResponse<Game>>("/games", {
                    params: {
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText, //done by java developer -sarim
                    },
                })
                .then((res) => res.data),
    });

export default useGames;
