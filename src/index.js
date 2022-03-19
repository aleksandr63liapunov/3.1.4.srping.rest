import ReactDOM from "react-dom";
import React from "react";
import ListUser from "./component/ListUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
import './styles/styles.css';
// import AddUser from "./component/AddUser";
// import UpdateUser from "./component/UpdateUser";
// import DeleteUser from "./component/DeleteUser";
// import User from "./component/User";
// import Login from "./component/Login";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {/*<Login/>*/}
            <Header/>
            {/*<AddUser/>*/}
            {/*<DeleteUser/>*/}
            {/*<UpdateUser/>*/}
            {/*<User/>*/}
            <ListUser/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);