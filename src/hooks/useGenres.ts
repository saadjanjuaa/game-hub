import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import genreService from "../services/genreService";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () =>
    useQuery({
        queryKey: ["genres"],
        queryFn: genreService.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: genres,
    });

export default useGenres;
