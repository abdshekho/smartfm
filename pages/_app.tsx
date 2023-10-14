// Main
import "../styles/styles.css";
import { useEffect } from "react";
import makeStore from "../store";
import { Provider, useDispatch } from "react-redux";
import NProgress from "nprogress";
import { Router } from "next/router";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../services/emotion";
import client from "../services/apollo";
import Cookies from "js-cookie";
import Head from "next/head";
import { ApolloProvider, useMutation } from "@apollo/client";

// Fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Compoents
import Layout from "../components/layout/Layout";

// style sheets
import "nprogress/nprogress.css";
import "swiper/css";
import "react-loading-skeleton/dist/skeleton.css";
import { AUTH_ON_LOAD } from "../domain/auth/auth.sql";
import { authRemoveLoading, authSetUser } from "../store/actions/auth";

// nprogress
NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const store = makeStore();

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const SmartFamily = (props: any) => {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <CacheProvider value={emotionCache}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                        <InitApp />
                    </CacheProvider>
                </Provider>
            </ApolloProvider>
        </>
    );
};

const InitApp = () => {
    const [AuthOnLoad] = useMutation(AUTH_ON_LOAD);
    const dispatch = useDispatch();

    useEffect(() => {
        const authToken = Cookies.get("auth_token");

        if (!authToken) {
            dispatch(authRemoveLoading());
        } else {
            AuthOnLoad({ variables: { token: authToken } }).then(({ data }) => {
                dispatch(authSetUser(data.authOnLoad));
            });
        }
    }, []);

    return null;
};

export default SmartFamily;
