import { ICategory } from "../category/category.types";
import { IMediaLibrary } from "../../components/image/mediaLibrary";

export interface IProduct {
    id: string;
    name: string;
    ar_name?: string;
    thumbnail: IMediaLibrary;
    showcase: IMediaLibrary[];
    category: ICategory;
    sku: string;
    description: string;
    ar_description?: string;
    about: string;
    ar_about?: string;
    quantities: { id?: string; quantity: string; price: string }[];
    customizations: Customization[];
    details: Detail[];
}

interface IProductQuantity {
    id: string;
    price: number;
    quantity: number;
}

export type Detail = {
    id: string;
    key: string;
    value: string;
};

type Customization = {
    id: string;
    type: "dropdown" | "card";
    options: CustomizationOption[];
};

type CustomizationOption = {
    id: string;
    name: string;
    image: IMediaLibrary | null;
    prices: OptionPrice[];
};

type OptionPrice = {
    id: string;
    price: number;
    quantity: IProductQuantity;
};
