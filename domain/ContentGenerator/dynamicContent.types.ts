import { IMediaLibrary } from "../../components/image/mediaLibrary";
import { IProduct } from "../product/product.types";

export type ComponentsTypes =
    | "Product_Swiper"
    | "Advs_Banner"
    | "2_Box_Adv"
    | "3_Box_Adv"
    | "4_Box_Adv"
    | "Box_Slider_Adv"
    | "Text_Editor"
    | "Adv_Cards"
    | "Space";

export type AdvBanners = {
    link: string;
    banner: IMediaLibrary;
};

export type ICompanyInfo = {
    title: string;
    subTitle: string;
    info: { icon: IMediaLibrary; field_one: string; field_two: string }[];
};

export type PopupHideDuration =
    | "Always"
    | "5 Days"
    | "10 Days"
    | "15 Days"
    | "1 Monthe"
    | "Unlimited";

export interface IDynamicContent {
    id: string;
    type?: ComponentsTypes;
    page?: string;
    order?: number;
    title?: string;
    description?: string;
    text?: string;
    ar_title?: string;
    ar_description?: string;
    ar_text?: string;
    space?: string;
    section?: string;
    products?: IProduct[];
    list?: any;
    listType?: string;
    actions?: any;
    companyInfo?: ICompanyInfo[];
    imagePosition?: "right" | "left";
    banner?: IMediaLibrary;
    opacity?: number;
    styles?: string;
    titleStyles?: string;
    descriptionStyles?: string;
    textStyles?: string;
    formId?: string;
    popupHideDuration?: PopupHideDuration;
    gallery?: IMediaLibrary[];
    advs?: AdvBanners[];
    createdAt?: number;
    updatedAt?: number;
}
