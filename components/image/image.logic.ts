import { Ratios } from "./Image";

const awsS3Url = "https://dabfvz03xqi3x.cloudfront.net/";

const useImage = () => {
    const getAspectRatio = (aspect: Ratios, width_height: boolean) => {
        if (width_height) return " ";

        const [w, h] = aspect.split(":");

        return ` aspect-w-${w} aspect-h-${h} `;
    };

    const getVideoAwsUrl = (src: string, aws: any) => {
        let uri = awsS3Url + aws.dir;
        const ext = src.split(".")[1];

        uri += src;
        return uri;
    };

    const getAwsUrl = (src: string, aws: any) => {
        let uri = awsS3Url + aws.dir;
        const ext = src.split(".")[1];

        if (ext !== "svg") uri += `${aws.size}-`;
        if (ext === "pdf") return "/pdf.svg";

        uri += src;
        return uri;
    };

    return { getAwsUrl, getAspectRatio, getVideoAwsUrl };
};

export default useImage;
