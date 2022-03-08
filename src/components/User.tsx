import React, { useEffect, useState, ChangeEvent } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import * as yup from "yup";

import { Box, TextField } from "@mui/material";
import { Header, Button } from "semantic-ui-react";

import { ButtonGrid } from "utils/util";
import "./common.css";

interface UserFormValues {
  email: string;
  password: string;
}

export const User: React.FC = () => {
  console.log("User");

  useEffect(() => {
    console.log("useEffect");
  }, []);

  const handleOnSubmit = (values: any) => {
    console.log("submit");
    if (!window.confirm("ユーザーを登録します。よろしいですか？")) {
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then((userCredential) => {
        alert("ユーザーの登録が完了しました");
      })
      .catch((error) => {
        alert("ユーザーの登録に失敗しました");
      });
  };

  const initialValues: UserFormValues = {
    email: "",
    password: "",
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("メールアドレスの形式に誤りがあります")
      .required("メールアドレスは必須です"),
    password: yup
      .string()
      .min(6, "6文字以上で入力してください")
      .required("必須です"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  const emailChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    formik.setFieldValue("email", e.target.value);
  };

  const passwordChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    formik.setFieldValue("password", e.target.value);
  };

  return (
    <>
      <Box className="page-box">
        <form onSubmit={formik.handleSubmit}>
          <Header as="h2">ユーザー登録</Header>
          <Box className="input-box">
            <label>メールアドレス *必須</label>
            <TextField
              name="email"
              label="email"
              type="text"
              fullWidth
              value={formik.values.email}
              onChange={(e) => emailChange(e)}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </Box>
          <Box className="input-box">
            <label>パスワード *必須</label>
            <TextField
              name="password"
              label="password"
              type="text"
              fullWidth
              value={formik.values.password}
              onChange={(e) => passwordChange(e)}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}
          </Box>
          <ButtonGrid>
            <Button type="submit" color="red">
              登録
            </Button>
          </ButtonGrid>
        </form>
      </Box>
    </>
  );
};
