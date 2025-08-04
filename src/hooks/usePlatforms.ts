import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import type { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
    return useQuery({
        queryKey: ["platforms"],
        queryFn: apiClient.getAll,
        staleTime: ms("24h"),
        initialData: platforms,
    });
};

export default usePlatforms;
