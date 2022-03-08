import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FirebaseContext } from "contexts";
// import { client } from "libs/apiConfig";
// import { AxiosResponse, AxiosError } from "axios";

import { Box, TextField } from "@mui/material";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useContext(FirebaseContext);
  console.log("Home");
  // client
  //   .get(`/test`)
  //   .then((response: AxiosResponse) => {
  //     console.log("get success");
  //     console.log(response);
  //   })
  //   .catch((error: AxiosError) => {
  //     console.log("get error");
  //     console.log(error);
  //   });

  return (
    <>
      <Box className="page-box">
        <label>Home Page</label>
      </Box>
    </>
  );
};
