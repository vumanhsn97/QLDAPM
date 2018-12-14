import { Link } from "react-router-dom";
import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { isMobile } from 'react-device-detect';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Settings from '@material-ui/icons/Settings';
import Reply from '@material-ui/icons/Reply';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import ViewHeadline from '@material-ui/icons/ViewHeadline';

class HeaderLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    }
  }

  handleClose = () => {
    this.setState({ menu: false });
  }

  handleMenu = () => {
    this.setState({ menu: true });
  }

  toggleDrawer = (open) => () => {
    this.setState({
      menu: open,
    });
  };



  headMobile = () => {
    const sideList = (
      <div>
        <List>
          <ListItem button component={Link} to="/new-project">
            <ListItemIcon>
              <PlaylistAdd />
            </ListItemIcon>
            <ListItemText primary="Create project" />
          </ListItem>
          <ListItem button component={Link} to="/new-issue">
            <ListItemIcon>
              <PlaylistAdd />
            </ListItemIcon>
            <ListItemText primary="Create issue" />
          </ListItem>
          <ListItem button component={Link} to="/list-project">
            <ListItemIcon>
              <ViewHeadline />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component={Link} to="/list-issue">
            <ListItemIcon>
              <ViewHeadline />
            </ListItemIcon>
            <ListItemText primary="Issues" />
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <Reply />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.menu} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }

  headDesktop = () => {
    return (
      <div style={{ paddingBottom: "40px" }}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <Link className="link" style={{ paddingLeft: "20px" }} to="/new-project">Create project</Link>
            <Link className="link" style={{ paddingLeft: "20px" }} to="/new-issue">Create issue</Link>
            <Link className="link" style={{ paddingLeft: "20px" }} to="/list-project">Projects</Link>
            <Link className="link" style={{ paddingLeft: "20px" }} to="/list-issue">Issues</Link>

            <div style={{ position: "absolute", right: "0px" }}>
            <Link className="link" style={{ paddingRight: "20px" }} to="/">Logout</Link>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <Settings />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

  render() {
    return (
      <div>
        {isMobile ? this.headMobile() : this.headDesktop()}
      </div>
    );
  }
}


export default HeaderLogin;
