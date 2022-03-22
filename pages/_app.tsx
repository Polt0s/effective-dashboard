import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';

import { Sidebar, TopNav } from 'components';

import 'styles/globals.css';
import 'styles/grid.css';
import 'styles/index.css';
import 'styles/theme.css';
import 'styles/config.css';

const Application = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const listAuthorization = ['/login'];

  return (
    <RecoilRoot>
        {listAuthorization.includes(router.pathname) ? (
            <main>
                <div className="layout">
                    <Component {...pageProps} />
                </div>
            </main>
        ) : (
            <main id="root">
                <div className="grid-root">
                    <div className="layout">
                        <Sidebar />
                        <div className="layout__content">
                        <TopNav />
                        <div className="layout__content-main">
                            <Component {...pageProps} />
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        )}
    </RecoilRoot>
  );
}

export default Application;
