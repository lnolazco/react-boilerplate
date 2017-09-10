import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.scss';
import List from '../List';
import User from '../User';
import { getAll, updateUser } from '../../actions/users';

export class AppContainer extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  addNewRow = () => {

  }

  saveChanges = () => {

  }

  renderUsers = (users) => {
    return users
      .map(({ id, firstname, surname }, i) => (
        <User
          key={i}
          id={id}
          firstname={firstname}
          surname={surname}
          onUpdate={this.props.update}
          onDelete={() => {}}
        />
      ));
  }

  render() {
    const { users } = this.props;

    return (
      <div className="users">
        <div className="users__list">
          <List>
            {this.renderUsers(users)}
          </List>
        </div>
        <div className="users__controls">
          <button onClick={this.addNewRow}>Add new</button>
        </div>
      </div>
    );
  }
}

AppContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  getAll: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

AppContainer.defaultProps = {
  users: [],
};

function mapStateToProperties(state) {
  return {
    users: state.users.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAll: () => dispatch(getAll()),
    update: user => dispatch(updateUser(user)),
  };
}

export default connect(mapStateToProperties, mapDispatchToProps)(AppContainer);
