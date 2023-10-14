import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
    query GetProducts($options: GetProductsOptions!) {
        getProducts(options: $options) {
            count
            products {
                id
                name
                ar_name
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
        }
    }
`;

export const GET_PRODUCT = gql`
    query GetProduct($id: String!) {
        getProduct(id: $id) {
            id
            name
            description
            about
            ar_name
            ar_description
            ar_about
            sku
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
            details {
                id
                key
                value
            }
            category {
                id
                name
            }
            quantities {
                id
                quantity
                price
            }
            customizations {
                id
                type
                info {
                    id
                    name
                }
                options {
                    id
                    name
                    image {
                        id
                        s3Key
                        dir
                    }
                    prices {
                        id
                        price
                        quantity {
                            id
                            quantity
                        }
                    }
                }
            }
        }
    }
`;
