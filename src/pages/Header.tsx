import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FirebaseContext } from "contexts";
import { app } from "firebaseProvider";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { MenuList } from "components/MenuList";
import { setOpen } from "store/reducer/commonReducer";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useContext(FirebaseContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const userName: string = user
    ? user.displayName
    : process.env.DEFAULT_USER_NAME;
  const userMail: string = user ? user.email : process.env.DEFAULT_USER_EMAIL;
  const userPhoto: string = user
    ? user.photoURL
    : process.env.PUBLIC_URL + "/user.png";
  console.log("Header");
  console.log(user);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = async () => {
    setAnchorEl(null);
    await app.auth().signOut();
    await navigate("/");
  };

  const setMenu = () => {
    dispatch(setOpen({ left: true }));
  };

  return (
    <>
      {user && (
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setMenu()}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Maechan React System
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt="User Icon" src={userPhoto} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <Card sx={{ minWidth: 275 }}>
                  <CardMedia
                    component="img"
                    height="220"
                    image={userPhoto}
                    alt="No Image"
                  />
                  <CardContent>
                    <Typography variant="h4" component="div">
                      {userName}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {userMail}
                    </Typography>
                  </CardContent>
                </Card>
              </MenuItem>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={onLogout}>ログアウト</MenuItem>
            </Menu>
          </Toolbar>
          <MenuList />
        </AppBar>
      )}
    </>
  );
};
