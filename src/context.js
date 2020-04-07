import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
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
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )

    }
}

export const Consumer = Context.Consumer;
