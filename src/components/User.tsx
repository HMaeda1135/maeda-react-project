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

export const User: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const open: any = useSelector<RootState>((state) => state.common.open);
  console.log("User");

  return (
    <>
      <label>User Page</label>
    </>
  );
};
