import { Item, DeleteButton, H2, H3 } from "./ContactItem.styled"

export function ContactItem({id, name, number, handleDelete}) {
    return (
        <Item>
            <H2>{name}</H2> 
            <H3>{number}</H3>
            <DeleteButton onClick={() => handleDelete(id)} >
            Delete
            </DeleteButton>
        </Item>
    )
}