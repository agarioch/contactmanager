import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layouts/TextInputGroup';
import { v4 as uuid } from 'uuid';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;
        console.log(this)

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };

        dispatch({ type: 'ADD_CONTACT', payload: newContact });

        // clear form after submission
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { name, email, phone } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card mb-3'>
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                {/* <form onSubmit={e => this.onSubmit(dispatch, e)}> */}
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        name='name'
                                        label='Name'
                                        placeholder='Enter name'
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup
                                        name='email'
                                        label='Email'
                                        placeholder='Enter email'
                                        value={email}
                                        type='email'
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup
                                        name='phone'
                                        label='Phone'
                                        placeholder='Enter phone'
                                        value={phone}
                                        onChange={this.onChange}
                                    />
                                    <input type='submit' value='Add Contact' className='btn btn-block btn-light' />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;