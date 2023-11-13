import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import platformService from "../services/platformService";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () =>
    useQuery({
        queryKey: ["platforms"],
        queryFn: platformService.getAll,
        staleTime: ms("24h"),
        initialData: platforms,
    });

export default usePlatforms;
