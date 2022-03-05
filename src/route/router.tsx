import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "pages/Top";
import { Header } from "pages/Header";
import { Home } from "pages/Home";
import { User } from "components/User";
import paths from "paths";
import { Toolbar, Container } from "@mui/material";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Toolbar />
      <Container>
        <Routes>
          <Route path={paths.top} element={<Top />} />
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.user} element={<User />} />
          <Route path={paths.todo} element={<Home />} />
          <Route path={paths.react} element={<Home />} />
          <Route path={paths.vue} element={<Home />} />
          <Route path={paths.flutter} element={<Home />} />
          <Route path={paths.test} element={<Home />} />
          <Route path={paths.play} element={<Home />} />
          <Route path={paths.other} element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
