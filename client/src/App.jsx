import React from "react";
import Sidebar from "./components/sidebar";
import Users from "./components/users";

const App = () => {
    return (
        <div className="grid grid-cols-12 overflow-hidden">
            <Sidebar />
            <Users />
        </div>
    );
};

export default App;
