import { Sidebar, TopNav } from "components";
import { RootRoutes } from "./Routes";

import './app.css';

const App = () => {
  return (
    <main className="grid-root">
        <div className="layout">
          <Sidebar />
          <div className="layout__content">
            <TopNav />
            <div className="layout__content-main">
              <RootRoutes />
            </div>
          </div>
        </div>
    </main>
  );
}

export default App;
