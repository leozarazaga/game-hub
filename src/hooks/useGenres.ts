import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const fetchGenres = async () => {
            try {
                setIsLoading(true);
                const res = await apiClient.get<FetchGenresResponse>("/genres", {
                    signal: controller.signal,
                });
                setGenres(res.data.results);
            } catch (err) {
                if (err instanceof CanceledError) return;
                setError((err as Error).message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGenres();

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading };
};

export default useGenres;
