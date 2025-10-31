import { PokemonTypes } from "@/interfaces/pokemon";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

type PokemonTypeProps = {
    type: PokemonTypes
}

export default function PokemonTypeBadge({ type }: PokemonTypeProps) {

    const pokemonType: Record<PokemonTypes, string> = {
        bug: "bg-teal-900",
        dragon: "bg-blue-950",
        electric: "bg-yelow-400",
        fighting: "bg-red-950",
        fire: "bg-red-600",
        flying: "bg-sky-400",
        ghost: "bg-indigo-950",
        grass: "bg-green-600",
        ground: "bg-[#492201]",
        ice: "bg-sky-400",
        normal: "bg-gray-400",
        poison: "bg-purple-600",
        psychic: "bg-violet-950",
        rock: "bg-yellow-950",
        water: "bg-blue-400",
    }

    return (
        <Badge className={cn(pokemonType[type], "px-4 mr-2 text-white uppercase")}>
            {type}
        </Badge>
    )
}