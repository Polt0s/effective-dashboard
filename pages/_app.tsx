import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';

import { Sidebar } from 'components';

import 'styles/config.css';
import 'styles/analytics.css';

import type { AppProps } from 'next/app';

const Application = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const listAuthorization = ['/login'];

    return (
        <RecoilRoot>
            {listAuthorization.includes(router.pathname) ? (
                <main>
                    <Component {...pageProps} />
                </main>
            ) : (
                <main id="root">
                    <div className="grid-root">
                        <div className="layout">
                            <Sidebar />
                            <div className="layout__content">
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
};

export default Application;
