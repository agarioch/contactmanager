import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layouts/TextInputGroup';
//import { v4 as uuid } from 'uuid';
import axios from 'axios';

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        // check for submission errors
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } })
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } })
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: 'Phone number is required' } })
            return;
        }

        const updateContact = {
            name,
            email,
            phone
        };

        const { id } = this.props.match.params;

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);

        dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

        // clear form after submission
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card mb-3'>
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                {/* <form onSubmit={e => this.onSubmit(dispatch, e)}> */}
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        name='name'
                                        label='Name'
                                        placeholder='Enter name'
                                        value={name}
                                        onChange={this.onChange}
                                        errors={errors.name}
                                    />
                                    <TextInputGroup
                                        name='email'
                                        label='Email'
                                        placeholder='Enter email'
                                        value={email}
                                        type='email'
                                        onChange={this.onChange}
                                        errors={errors.email}
                                    />
                                    <TextInputGroup
                                        name='phone'
                                        label='Phone'
                                        placeholder='Enter phone'
                                        value={phone}
                                        onChange={this.onChange}
                                        errors={errors.phone}
                                    />
                                    <input type='submit' value='Update Contact' className='btn btn-block btn-light' />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditContact;