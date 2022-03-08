import React from "react";
import { useNavigate } from "react-router-dom";
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

const mainPage: Array<string> = [
  "Home",
  "User",
  "Todo",
  "React",
  "Vue",
  "Flutter",
];
const subPage: Array<string> = ["Test", "Play", "Other"];

export const MenuList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const open: any = useSelector<RootState>((state) => state.common.open);

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
            {mainPage.map((text) => (
              <ListItemButton key={text} onClick={() => goPage(text)}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <List>
            {subPage.map((text) => (
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
