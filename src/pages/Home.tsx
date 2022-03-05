import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FirebaseContext } from "contexts";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useContext(FirebaseContext);
  console.log("Home");
  console.log(user);

  return (
    <>
      <label>Home Page</label>
    </>
  );
};
