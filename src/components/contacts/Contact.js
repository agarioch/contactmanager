import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import classnames from 'classnames';
import axios from 'axios';


class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onExpand = e => {
        this.setState({ showContactInfo: !this.state.showContactInfo })
    };

    onDelete = async (id, dispatch) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    };

    render() {
        const { contact: { id, name, email, phone } } = this.props;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                <span onClick={this.onExpand} style={{ cursor: 'pointer' }}>
                                    {name}
                                    <i className={classnames("material-icons closed", { 'turn': this.state.showContactInfo })}>arrow_drop_down</i>
                                </span>
                                <i className="material-icons mt-1" style={{ float: 'right', cursor: 'pointer', color: '#db0011' }}
                                    onClick={this.onDelete.bind(this, id, dispatch)}>
                                    cancel
                                </i>
                                <Link to={`contact/edit/${id}`}>
                                    <i
                                        className="material-icons"
                                        style={{
                                            cursor: 'pointer',
                                            float: 'right',
                                            color: '#666',
                                            marginRight: '1rem'
                                        }}>edit</i>
                                </Link>
                            </h4>
                            {
                                showContactInfo ? (
                                    <ul className="list-group">
                                        <li className="list-group-item">Email: {email}</li>
                                        <li className="list-group-item">Phone: {phone}</li>
                                    </ul>) : null
                            }

                        </div>
                    )
                }
                }
            </Consumer >
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;
