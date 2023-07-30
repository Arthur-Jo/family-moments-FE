// import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { useEffect,useState } from 'react';
import classes from "./App.module.css";
import Loading from './pages/Loading';


import MyPage from './pages/MyPage';
import Landing from './pages/Landing';
import Main from './pages/Main';
import Login from './pages/Login';
import Findid from './pages/Findid';
import Findid2 from './pages/Findid2';
import NewFamily from './pages/NewFamily';

import Header from './components/Header';


function App() {

    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }
    useEffect(() => {
        setScreenSize();
      });

      const [title,setTitle]=useState("FamilyMoments");
      const changeTitle=(e)=>{
        setTitle(e);
      }

    return (
        <div className={classes.App}>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Loading/>}></Route>

                    {/* Header만 필요한 페이지들 */}
                    <Route path="/landing" element={<Landing title={title}/>}>
                        <Route path = "/landing/login" element={<Login />}></Route>
                        <Route path = "/landing/findid" element = {<Findid changeTitle={changeTitle}/>}></Route>
                        <Route path = "/landing/findid2" element = {<Findid2 changeTitle={changeTitle}/>}></Route>
                        <Route path='/landing/newfamily' element={<NewFamily />} />

                        {/* 생성 시 */}
                        <Route path='/landing/페이지링크' element={"페이지 컴포넌트"} />
                    </Route>

                    {/* Header와 Footer가 필요한 페이지들 */}
                    <Route path="/main/*" element={<Main/>} />

                    {/* 페이지 생성 시 기본 값 */}
                    <Route path="/ex" element={<Loading/>} />

                </Routes>
            </BrowserRouter>
            
            
        </div>
    );
}

export default App;
