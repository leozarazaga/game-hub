import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const fetchGenres = async () => {
            try {
                setIsLoading(true);
                const res = await apiClient.get<FetchResponse<T>>(endpoint, {
                    signal: controller.signal,
                });
                setData(res.data.results);
            } catch (err) {
                if (err instanceof CanceledError) return;
                setError((err as Error).message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGenres();

        return () => controller.abort();
    }, [endpoint]);

    return { data, error, isLoading };
};

export default useData;
