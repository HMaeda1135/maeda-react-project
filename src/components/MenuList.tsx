import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { RootState } from "index";
import { setOpen } from "store/reducer/commonReducer";

export const MenuList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const open: any = useSelector<RootState>((state) => state.common.open);
  console.log("MenuList");

  const toggleDrawer =
    (status: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      dispatch(setOpen({ left: status }));
    };

  const goPage = (page: string) => {
    navigate("/" + page.toLowerCase());
  };

  return (
    <>
      <Drawer open={open["left"]} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {["Home", "User", "Todo", "React", "Vue", "Flutter"].map(
              (text, index) => (
                <ListItemButton key={text} onClick={() => goPage(text)}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              )
            )}
          </List>
          <Divider />
          <List>
            {["Test", "Play", "Other"].map((text, index) => (
              <ListItemButton key={text} onClick={() => goPage(text)}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
