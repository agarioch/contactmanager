import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onExpand = e => {
        this.setState({ showContactInfo: !this.state.showContactInfo })
    };

    onDelete = () => {
        this.props.deleteClickHandler();
    }

    render() {
        const { contact: { name, email, phone } } = this.props;
        const { showContactInfo } = this.state;
        return (
            <div className="card card-body mb-3">
                <h4>
                    <span onClick={this.onExpand} style={{ cursor: 'pointer' }}>
                        {name}
                        <i className="material-icons">arrow_drop_down</i>
                    </span>
                    <i className="material-icons mt-1" style={{ float: 'right', cursor: 'pointer', color: '#db0011' }}
                        onClick={this.onDelete}>
                        cancel
                    </i>
                </h4>
                {showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>) : null}

            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
