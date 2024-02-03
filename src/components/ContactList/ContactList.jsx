import { ContactItem } from "components/ContactItem/ContactItem"
import { List } from "./ContactList.styled"


export function ContactList({filter, contacts, handleDelete}) {
    return (
      <List>
        {contacts.map(({id, name, number}) => {
          const lowerName = name.toLocaleLowerCase()
          const lowerFilter = filter.toLocaleLowerCase()

          if (lowerName.includes(lowerFilter)) {
            return (
              <ContactItem id={id} name={name} number={number} handleDelete={handleDelete} />
            )
          }
        })}
      </List>
    )
}