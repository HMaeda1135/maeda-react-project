import { useContext } from "react";
import { FirebaseContext } from "contexts";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export type UserInfoType = {
  userName: string | undefined;
  userMail: string | undefined;
  userPhoto: string | undefined;
};

export const UserInfo = () => {
  const { user } = useContext(FirebaseContext);
  let userName: string | undefined = process.env.REACT_APP_DEFAULT_USER_NAME;
  let userMail: string | undefined = process.env.REACT_APP_DEFAULT_USER_EMAIL;
  let userPhoto: string | undefined = process.env.PUBLIC_URL + "/user.png";
  if (user) {
    if (user.displayName) {
      userName = user.displayName;
    }
    if (user.displayName) {
      userMail = user.email;
    }
    if (user.photoURL) {
      userPhoto = user.photoURL;
    }
  }

  const result: UserInfoType = {
    userName: userName,
    userMail: userMail,
    userPhoto: userPhoto,
  };

  return result;
};

export const ButtonGrid = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingRight: theme.spacing(3),
  paddingBottom: theme.spacing(2),
  textAlign: "right",
}));
