import * as React from "react";
import { useState } from "react";
import { ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useAuth0 } from "@auth0/auth0-react";

const pages = ["Products", "Pricing", "Blog"];

const Item = ({ title, to, selected, setSelected }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <ListItemButton
        sx={{
          my: 2,
          color: "white",
          display: "block",
          // mb: "10px",
          "&.Mui-selected": {
            color: "#FEFEFE !important",
            // backgroundColor: "#2e8b57",
          },
          "&.Mui-focusVisible": {
            color: "#6870fa !important",
            // backgroundColor: "#2e8b57",
          },
          ":hover #icons": {
            color: "#6870fa !important",
            // backgroundColor: "#2e8b57",
          },
          ":hover": {
            color: "#6870fa !important",
            // backgroundColor: "#2e8b57",
          },
        }}
        selected={selected === to}
        // style={{
        //   color: colors.grey[100],
        // }}
        onClick={() => setSelected(to)}
      >
        {/* <ListItemIcon
          id="icons"
          sx={{
            minWidth: "0",
            pr: "15px",
            color: selected === to ? "#6870fa !important" : null,
          }}
        >
          {icon}
        </ListItemIcon> */}
        {/* {isCollapsed ? ( */}
        <Typography
          sx={{
            color: selected === to ? "#6870fa !important" : null,
          }}
        >
          {title}
        </Typography>
        {/* ) : null} */}
        {/* {title} */}
      </ListItemButton>
    </Link>
  );
};
// const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => { }

export function NavBar() {
  // const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState(window.location.pathname);

  const { user, logout } = useAuth0();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const logoutButtonHandler = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* This is in case of low/mobile resolution  */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}aa</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* This is in case of high resolution  */}
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
            {/* <List> */}
            <Button>
              <Item
                title="Home"
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="AzureAppConfig"
                to="AzureAppConfig"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="AzureKeyVault"
                to="AzureKeyVault"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Profile"
                to="Profile"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="TriggerReports"
                to="TriggerReports"
                selected={selected}
                setSelected={setSelected}
              />
            </Button>
            {/* </List> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  // src="https://lh3.googleusercontent.com/a/AAcHTtcfYGhYNp8YhsD7Vox-uqUC_Ks2RneO75Ov4peJzA=s96-c"
                  src={user.picture}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link to={"Profile"} style={{ textDecoration: "none" }}>
                <MenuItem key={"profile"} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">profile</Typography>
                </MenuItem>
              </Link>
              <MenuItem
                key={"Logout"}
                onClick={() => {
                  handleCloseUserMenu();
                  logoutButtonHandler();
                }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
              {/* {settings.map((setting) => (
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
// export default NavBar;
