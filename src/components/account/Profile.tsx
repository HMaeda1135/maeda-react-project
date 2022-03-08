import { Box, Grid, Card, CardMedia } from "@mui/material";
import { Header } from "semantic-ui-react";

import { UserInfo, UserInfoType } from "utils/util";

export const Profile = () => {
  const userInfo: UserInfoType = UserInfo();
  console.log("Profile");

  return (
    <>
      <Box className="page-box">
        <Header as="h2">プロフィール</Header>
        <Grid container>
          <Grid item xs={0} sm={4}></Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                image={userInfo.userPhoto}
                alt="No Image"
              />
            </Card>
          </Grid>
          <Grid item xs={0} sm={4}></Grid>
        </Grid>
        <Box className="contents-box">
          <Grid container>
            <Grid item xs={0} sm={4}></Grid>
            <Grid item xs={5} sm={2}>
              <label className="normal-label">ユーザー名：</label>
            </Grid>
            <Grid item xs={7} sm={2}>
              <label className="normal-data">{userInfo.userName}</label>
            </Grid>
            <Grid item xs={0} sm={4}></Grid>
            <Grid item xs={0} sm={4}></Grid>
            <Grid item xs={5} sm={2}>
              <label className="normal-label">メールアドレス：</label>
            </Grid>
            <Grid item xs={7} sm={2}>
              <label className="normal-data">{userInfo.userMail}</label>
            </Grid>
            <Grid item xs={0} sm={4}></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
