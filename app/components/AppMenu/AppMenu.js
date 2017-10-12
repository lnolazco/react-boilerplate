import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Input, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class AppMenu extends PureComponent {
  state = { activeItem: 'home', visible: false }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { activeItem, visible } = this.state;

    return (
      <div>
        <Menu secondary>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.toggleVisibility}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick}>
            <Link to="/messages">Messages</Link>
          </Menu.Item>
          <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item name="logout" active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation="push" width="thin" visible={visible} icon="labeled" vertical inverted>
            <Menu.Item name="home">
              <Icon name="home" />
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item name="gamepad">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item name="camera">
              <Icon name="camera" />
              <Link to="/about">About</Link>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

AppMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default AppMenu;
