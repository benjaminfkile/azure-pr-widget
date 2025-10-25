import type { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import appContentStyles from "./AppContentStyles";
import { Settings } from "../Settings/Settings";


const AppContent: FunctionComponent = () => {
  const classes = appContentStyles();

  return (
    <div className={classes.root}>
      <Routes>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default AppContent;
