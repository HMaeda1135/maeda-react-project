import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FirebaseContext } from "contexts";

import { Box, TextField } from "@mui/material";

export const Todo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useContext(FirebaseContext);
  console.log("Todo");

  return (
    <>
      <Box className="page-box">
        <label>Todo Page</label>
      </Box>
    </>
  );
};
