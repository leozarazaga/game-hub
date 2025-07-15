import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { type AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(
        () => {
            const controller = new AbortController();

            const fetchData = async () => {
                try {
                    setIsLoading(true);
                    await new Promise((res) => setTimeout(res, 1000));

                    const res = await apiClient.get<FetchResponse<T>>(endpoint, {
                        signal: controller.signal,
                        ...requestConfig,
                    });

                    setData(res.data.results);
                } catch (err) {
                    // if (err instanceof CanceledError) return;
                    if (axios.isCancel(err)) return;
                    setError((err as Error).message);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchData();

            return () => controller.abort();
        },
        deps ? [...deps] : []
    );

    return { data, error, isLoading };
};

export default useData;
