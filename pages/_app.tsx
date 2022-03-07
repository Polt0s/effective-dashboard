import { AppProps } from 'next/app';

import { Sidebar, TopNav } from 'components';

import 'styles/globals.css';
import 'styles/grid.css';
import 'styles/index.css';
import 'styles/theme.css';

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <main className="grid-root">
        <div className="layout">
          <Sidebar />
          <div className="layout__content">
            <TopNav />
            <div className="layout__content-main">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
    </main>
  );
}

export default Application;
