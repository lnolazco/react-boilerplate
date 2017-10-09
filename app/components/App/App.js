import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from '../Table';
import User from '../User';
import { getAll, updateUser, addUser, deleteUser } from '../../actions/users';

export class AppContainer extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  addNewRow = () => {
    this.props.addUser();
  }

  renderUsers = (users) => {
    return users
      .map(user => (
        <User
          key={user.get('id')}
          id={user.get('id')}
          firstname={user.get('firstname')}
          surname={user.get('surname')}
          onUpdate={this.props.update}
          onDelete={this.props.deleteUser}
        />
      ));
  }

  render() {
    const { users } = this.props;

    return (
      <div className="app">
        <h2 className="app__header">CRUD Example</h2>
        <div className="app__list">
          <Table
            headers={['First name', 'Surname', '']}
            data={this.renderUsers(users)}
          />
        </div>
        <div className="app__controls">
          <button onClick={this.addNewRow} className="btn btn--primary">Add new</button>
        </div>
      </div>
    );
  }
}

AppContainer.propTypes = {
  users: PropTypes.object.isRequired,
  getAll: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

// AppContainer.defaultProps = {
//   users: [],
// };

function mapStateToProperties(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAll: () => dispatch(getAll()),
    update: user => dispatch(updateUser(user)),
    addUser: () => dispatch(addUser()),
    deleteUser: id => dispatch(deleteUser(id)),
  };
}

export default connect(mapStateToProperties, mapDispatchToProps)(AppContainer);
