import React, { Component } from 'react'
import { Consumer } from '../../context'
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
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className='form-control form-control-lg'
                                            placeholder='Enter name'
                                            name='name'
                                            value={name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className='form-control form-control-lg'
                                            placeholder='Enter email'
                                            name='email'
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Phone</label>
                                        <input
                                            type="text"
                                            className='form-control form-control-lg'
                                            placeholder='Enter phone number'
                                            name='phone'
                                            value={phone}
                                            onChange={this.onChange}
                                        />
                                    </div>
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