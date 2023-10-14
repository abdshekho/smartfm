import { gql } from "@apollo/client";

export const GET_DYNAMIC_CONTENT = gql`
    query GetDynamicContents($page: String) {
        getDynamicContents(filters: { page: $page }) {
            dynamicContent {
                id
                type
                page
                order
                title
                description
                text
                ar_title
                ar_description
                ar_text
                opacity
                space
                imagePosition
                formId
                popupHideDuration
                companyInfo {
                    title
                    subTitle
                    info {
                        field_one
                        field_two
                        icon {
                            id
                            s3Key
                            dir
                        }
                    }
                }
                products {
                    id
                    name
                    about
                    ar_name
                    ar_about
                    sku
                    quantities {
                        id
                        quantity
                        price
                    }
                    thumbnail {
                        id
                        s3Key
                        dir
                    }
                    showcase {
                        id
                        s3Key
                        dir
                    }
                    category {
                        id
                        name
                    }
                    createdAt
                }
                section
                advs {
                    link
                    banner {
                        id
                        description
                        type
                        s3Key
                        dir
                    }
                }
                actions {
                    link
                    icon {
                        id
                        description
                        type
                        s3Key
                        dir
                    }
                    text
                }
                styles
                titleStyles
                descriptionStyles
                textStyles
                list {
                    id
                    title
                    description
                    ar_title
                    ar_description
                    cover {
                        id
                        description
                        type
                        s3Key
                        dir
                    }
                }
                listType
                banner {
                    id
                    description
                    type
                    s3Key
                    dir
                    createdAt
                }
                gallery {
                    id
                    description
                    type
                    s3Key
                    dir
                    createdAt
                }
                createdAt
            }
            count
        }
    }
`;
