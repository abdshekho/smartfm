import gql from "graphql-tag";

export const UPDATE_PROFILE = gql`
    mutation updateUser(
        $id: ID!
        $username: String!
        $firstName: String!
        $lastName: String!
        $email: String!
        $phone: String!
    ) {
        updateUser(
            id: $id
            username: $username
            firstName: $firstName
            lastName: $lastName
            email: $email
            phone: $phone
        ) {
            id
        }
    }
`;
