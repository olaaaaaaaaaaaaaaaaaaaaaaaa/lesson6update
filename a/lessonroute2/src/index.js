import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import styles from "./app.module.css";
import NotFound from "./components/not-found/not-found";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav >
        <Link to="/"><div className={styles.navLink}>Главная</div></Link>
        <Link to="/task"><div className={styles.navLink}>Все задачи </div></Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/task" element={<App />} />
        <Route path="/task/:id" element={<App />} />
		<Route path="*" element={<NotFound />} />


      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);
