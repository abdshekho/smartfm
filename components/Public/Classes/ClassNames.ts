import MultiClass from "./MultiClass";

// Transitions;
export const transition200 = "transition-all duration-200";
export const transition300 = "transition-all duration-300";
export const transition500 = "transition-all duration-500";
export const transition700 = "transition-all duration-700";
export const transition1000 = "transition-all duration-1000";

// Flex Box;
export const ColCenter = "flex flex-col items-center justify-center";
export const RowCenter = "flex flex-row items-center justify-center";

// Flex Positions;
export const Flex_CB = "items-center justify-between";
export const Flex_CC = "items-center justify-center";

// Col To Row Get SIZE;

export const FlexBox = ({
    rtc,
    size,
    item,
    justify,
    sItem,
    sJustify,
}: {
    rtc?: boolean;
    size: "sm" | "md" | "lg";
    item?: string;
    justify?: string;
    sItem?: string;
    sJustify?: string;
}) => {
    const compare = () => {
        switch (size) {
            case "sm":
                return "sm";
            case "md":
                return "md";
            case "lg":
                return "lg";
            default:
                return "sm";
        }
    };

    const prefix_1 = "items-";
    const prefix_2 = "justify-";

    if (rtc)
        return MultiClass([
            `flex flex-row`,
            `${prefix_1 + item}`,
            `${prefix_2 + justify}`,
            `${compare()}:flex-col`,
            `${compare()}:${prefix_1 + sItem}`,
            `${compare()}:${prefix_2 + sJustify}`,
        ]);
    return MultiClass([
        `flex flex-col`,
        `${prefix_1 + item}`,
        `${prefix_2 + justify}`,
        `${compare()}:flex-row`,
        `${compare()}:${prefix_1 + sItem}`,
        `${compare()}:${prefix_2 + sJustify}`,
    ]);
};

// ${item ? item : "items-center"} ${
//     justify ? justify : "justify-center"
// }
