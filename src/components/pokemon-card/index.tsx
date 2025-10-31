import { IPokemon } from "@/interfaces/pokemon"
import { Star } from "lucide-react"
import PokemonTypeBadge from "../pokemon-type"
import { Card, CardContent } from "../ui/card"
import { useSetFavoritePokemon } from "@/hooks/useSetFavoritePokemon"

export default function PokemonCard(props: IPokemon) {
    const imageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/500px-Pok%C3%A9_Ball_icon.svg.png"
    const { name, types, isFavorite, id } = props

    const setFavoritePokemon = useSetFavoritePokemon()
    const handleSetFavoritePokemon = () => {
        setFavoritePokemon(id)
    }

    return (
        <Card>
            <CardContent className="space-y-2">
                <div className="flex justify-between">
                    <img
                        src={imageURL}
                        alt={name}
                        className="size-24 rotate-45"
                    />
                    <Star
                        className={isFavorite ? "fill-yellow-400 stroke-yellow-400" : 'stroke-yellow-400'}
                        onClick={handleSetFavoritePokemon}
                    />
                </div>
                <h2 className="first-letter:uppercase">{name}</h2>
                {types.map(({ type }, key) => (
                    <PokemonTypeBadge key={key} type={type.name} />
                ))}
            </CardContent>
        </Card >
    )
}