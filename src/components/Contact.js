import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
    state = {};

    onExpand = e => { };

    render() {
        const { contact: { name, email, phone } } = this.props;
        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}
                    <i onClick={this.onExpand} className="material-icons">arrow_drop_down</i>
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;
