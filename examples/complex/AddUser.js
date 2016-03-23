import React, { Component, PropTypes } from 'react';
import { connect } from 'react-firebase';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  onChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.addUser(this.state.name);
  }

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={::this.onSubmit}>
        <input name="name" value={name} onChange={::this.onChange} />
        <button type="submit" disabled={!name}>Add user</button>
      </form>
    );
  }
}

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired,
};

const mapFirebaseToProps = firebase => ({
  addUser: name => firebase.child('users').push({ name }),
});

export default connect(null, mapFirebaseToProps)(AddUser);