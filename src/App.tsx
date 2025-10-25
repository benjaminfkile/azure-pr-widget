import type { FunctionComponent } from "react";
import appStyles from "./AppStyles";
import TopNavigation from "./components/Navigation/TopNavigation/TopNavigation";
import BottomNavigation from "./components/Navigation/BottomNavigation/BottomNavigation";
import AppContent from "./components/AppContent/AppContent";

const App: FunctionComponent = () => {

  const styles = appStyles();

  return (
    <div className={styles.root}>
      <TopNavigation />
      <AppContent />
      <BottomNavigation />
    </div>
  );
};

export default App;
