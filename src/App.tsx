import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { Loading } from "./containers/Loading";
import { Login } from "./containers/Login";
import { NetworkPage } from "./containers/NetworkPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        // <div className="App">
        //     <div className="wrapper">
        //         <div className="logo"></div>
        //         <div className="text-center mt-4 name">Twitter</div>
        //         <form className="p-3 mt-3">
        //             <div className="form-field d-flex align-items-center">
        //                 <span className="far fa-user"></span>
        //                 <input
        //                     type="text"
        //                     name="userName"
        //                     id="userName"
        //                     placeholder="Username"
        //                 ></input>
        //             </div>
        //             <div className="form-field d-flex align-items-center">
        //                 <span className="fas fa-key"></span>
        //                 <input
        //                     type="password"
        //                     name="password"
        //                     id="pwd"
        //                     placeholder="Password"
        //                 ></input>
        //             </div>
        //             <button className="btn mt-3">Login</button>
        //         </form>
        //         {/* <div className="text-center fs-6">
        //             <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        //         </div> */}
        //     </div>
        // </div>
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/network" element={<NetworkPage />} />
                        <Route path="/loading" element={<Loading />} />
                    </Route>
                    {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}

                    {/* <Route path="/network" element={<NetworkPage />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
