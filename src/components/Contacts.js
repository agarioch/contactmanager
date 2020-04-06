import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Bailey Smith',
                email: 'BSmith@mail.bbk.uk',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Karen Williams',
                email: 'kwilliams@gmail.com',
                phone: '888-888-8888'
            },
            {
                id: 3,
                name: 'Henry Johnston',
                email: 'henryjohnston@gmail.com',
                phone: '222-222-2222'
            }
        ]
    }


    render() {
        const { contacts } = this.state;

        return (
            <div>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact} />
                ))}
            </div>
        )
    }
}

export default Contacts;
