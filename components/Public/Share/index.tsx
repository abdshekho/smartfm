// Main
import React from "react";
import {
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
} from "react-share";
import config from "../../../constants/config";
import Image from "../../image/Image";

const ProductShare = ({ uri, noSpace }: { uri: string; noSpace?: boolean }) => {
    const iconClass = "";

    return (
        <div className={noSpace ? "" : "mt-4 mb-2"}>
            <ul className="flex flex-row gap-4">
                <li>
                    <a className="p-0 m-0">
                        <FacebookShareButton url={`${config.CLIENT_URL + uri}`}>
                            <div className="flex items-center justify-center p-2 w-8 h-8 transition-all duration-300 rounded-full shadow-3xl bg-gray-50 hover:bg-gray-200">
                                <Image src="/facebook.png" aspect="1:1" />
                            </div>
                        </FacebookShareButton>
                    </a>
                </li>
                <li>
                    <a className="p-0 m-0">
                        <TwitterShareButton url={`${config.CLIENT_URL + uri}`}>
                            <div className="flex items-center justify-center p-2 w-8 h-8 transition-all duration-300 rounded-full shadow-3xl bg-gray-50 hover:bg-gray-200">
                                <Image src="/twitter.png" aspect="1:1" />
                            </div>
                        </TwitterShareButton>
                    </a>
                </li>
                <li>
                    <a className="p-0 m-0">
                        <WhatsappShareButton url={`${config.CLIENT_URL + uri}`}>
                            <div className="flex items-center justify-center p-2 w-8 h-8 transition-all duration-300 rounded-full shadow-3xl bg-gray-50 hover:bg-gray-200">
                                <Image src="/whatsapp.png" aspect="1:1" />
                            </div>
                        </WhatsappShareButton>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ProductShare;
