import { useQuery } from "@tanstack/react-query";
import apiClient, { type FetchResponse } from "../services/api-client";

import platforms from "../data/platforms";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: () => apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24 hour
        initialData: { count: platforms.length, results: platforms },
    });
};

export default usePlatforms;
