import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Input, Menu, Icon } from 'semantic-ui-react';

class Header extends PureComponent {
  state = { activeItem: 'home', visible: false }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { activeItem, visible } = this.state;

    return (
      <div>
        <Menu secondary>
          <Menu.Item name="home" active={activeItem === 'home'} onClick={this.toggleVisibility} />
          <Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick} />
          <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick} />
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
              Home
            </Menu.Item>
            <Menu.Item name="gamepad">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item name="camera">
              <Icon name="camera" />
              Channels
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

Header.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Header;
