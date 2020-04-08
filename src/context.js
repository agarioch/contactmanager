import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default:
            return state;
    }
}

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
        ],
        dispatch: action => this.setState(state => reducer(state, action))
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
