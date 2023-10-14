import Head from "next/head";
import config from "../../../constants/config";

const seoDescription =
    "smartfamily online stroe for air conditioning smart parts / IOT / Reparing Parts";
const logo = "";

interface IProps {
    children?: React.ReactNode;
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

const HeadLayout = ({ children, title, description, image, url }: IProps) => {
    return (
        <Head>
            <meta property="og:type" content="website" />
            <title>{title ? `${title} | Smartfamily` : `Smartfamily`}</title>
            <meta
                name="title"
                content={title ? `${title} | Smartfamily` : `Smartfamily`}
            />
            <meta
                property="og:title"
                content={title ? `${title} | Smartfamily` : `Smartfamily`}
            />
            <meta
                property="twitter:title"
                content={title ? `${title} | Smartfamily` : `Smartfamily`}
            />
            <meta name="description" content={description || seoDescription} />
            <meta
                property="og:description"
                content={description || seoDescription}
            />
            <meta
                property="twitter:description"
                content={description || seoDescription}
            />

            <meta property="og:image" content={image ? image : logo} />
            <meta property="twitter:image" content={image ? image : logo} />
            <meta name="twitter:card" content="summary_large_image" />
            {url && (
                <meta property="og:url" content={config.CLIENT_URL + url} />
            )}
            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
            />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            {children}
        </Head>
    );
};

export default HeadLayout;
