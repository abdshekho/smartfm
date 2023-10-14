import dynamic from "next/dynamic";

const Image = dynamic(() => import("./Image"), {
    ssr: false,
});

export default Image;
