// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Detail from "./routes/Detail";
// import Home from "./routes/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import MainPage from './components/page/MainPage';
import HomeList from './components/list/HomeList';
import PostWritePage from './components/page/PostWritePage';
import PostViewPage from './components/page/PostViewPage';
import styled from "styled-components";

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
        <MainTitleText>브랜드 R&D</MainTitleText>
        <Routes>
            {/* <Route index element={<MainPage />} /> */}
            <Route index element={<HomeList />} />
            <Route path="post-write" element={<PostWritePage />} />
            <Route path="post/:postId" element={<PostViewPage />} />
        </Routes>
    </BrowserRouter>
    // <Router>
    //   <Switch>
    //     <Route path="/abot-us">
    //       <h1>Hello</h1>
    //     </Route>
    //     <Route path="/movie/:id">
    //       <Detail />
    //     </Route>
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
