import { Input, FilterContainer } from "./Filter.styled"

export function Filter({filter, handleFilterChange}) {
    return (
        <FilterContainer>
            <h3>Find contacts by name</h3>
            <Input type="text" name="filter" value={filter} onChange={handleFilterChange}/>
        </FilterContainer>
    )
}