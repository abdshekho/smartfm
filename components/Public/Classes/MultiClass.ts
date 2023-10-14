// Main
import React from "react";

// Types
type IProps = any | any[];

const MultiClass = (classes: IProps): string => {
    const Extractor = () => {
        let newClass: any = "";

        for (let t of classes as any) {
            newClass = newClass + " " + t;
        }

        return newClass;
    };

    if (typeof classes === "object") return Extractor();
    return classes;
};

export default MultiClass;
