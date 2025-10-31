import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    Item,
    ItemContent,
    ItemActions
} from "../ui/item";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useSetFilters } from "@/hooks/useSetFilters";

const FilterBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
    const setFilter = useSetFilters()


    const handleShowOnlyFavorites = (isChecked: CheckedState) => {
        setShowOnlyFavorites(!!isChecked);
        setFilter({
            favoritesOnly: !!isChecked,
        })
    }

    const handleSearch = () => {
        setFilter({
            searchParams: searchTerm,
        })
    }

    return (
        <div className='col-span-full'>
            <Item variant="muted">
                <ItemContent>
                    <Input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search Pokémon..."
                    />
                </ItemContent>
                <ItemActions>
                    <Button size="sm" onClick={handleSearch}>
                        Search
                    </Button>
                </ItemActions>
            </Item>
            <Item variant="muted" className="mt-2">
                <ItemContent>
                    <div className="flex items-center gap-3">
                        <Checkbox
                            id="terms"
                            checked={showOnlyFavorites}
                            onCheckedChange={handleShowOnlyFavorites}
                        />
                        <Label htmlFor="terms">Show only favorites</Label>
                    </div>
                </ItemContent>
            </Item>
        </div>
    );
}

export default FilterBar;