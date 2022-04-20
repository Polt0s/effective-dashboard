import React from 'react';
import Head from 'next/head';

const Error: React.FC = () => {
    return (
        <>
            <Head>
                <title>404 Error</title>
            </Head>
            <h1>404</h1>
            <p>Страница не найдена</p>
        </>
    );
};

export default Error;
