import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import LiveChart from './../charts/Candles/LiveChart';


export const AllRoutes = ()=>{

    return (
        <Routes>
            <Route path="/" element={<Main />} ></Route>
            <Route path="/chart" element={<LiveChart />} ></Route>
        </Routes>
    );

}