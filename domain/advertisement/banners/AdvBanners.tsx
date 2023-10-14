// Main
import parse from "parse-json";
import Link from "next/link";
import Image from "../../../components/image/Image";
import { IDynamicContent } from "../../ContentGenerator/dynamicContent.types";

const AdvBanners = ({
    data,
    gridCols = 2,
    gridRows = 1,
    count,
}: {
    data: IDynamicContent;
    gridCols?: 2 | 3;
    gridRows?: 1 | 2;
    count: 1 | 2 | 3 | 4;
}) => {
    const advs = data?.advs;
    const styles: any = data?.styles ? parse(data?.styles) : {};

    return (
        <div
            className={`my-2 grid gird-cols-1 md:grid-rows-${gridRows} md:grid-cols-${gridCols} gap-3`}
        >
            {advs.slice(0, count).map((i) => (
                <Link key={i.banner.id} href={i.link || ""}>
                    <div style={styles} className="h-auto w-full bg-red-400">
                        <Image
                            alt={i.banner.description}
                            aws={{
                                dir: i.banner.dir,
                                size: "l",
                            }}
                            objectFit="contain"
                            height="100%"
                            width="100%"
                            src={i.banner.s3Key}
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default AdvBanners;
