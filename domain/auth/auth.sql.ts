import { gql } from "@apollo/client";

export const AUTH_ON_LOAD = gql`
    mutation AutOnLoad($token: String!) {
        authOnLoad(token: $token) {
            id
            username
            firstName
            lastName
            phone
            email
        }
    }
`;

export const GET_USER_INFO = gql`
    query user($id: String!) {
        user(id: $id) {
            id
            username
            firstName
            lastName
            phone
            email
        }
    }
`;

export const AUTH_SIGNIN = gql`
    mutation AuthSignin($identifier: String!, $password: String!) {
        signin(data: { identifier: $identifier, password: $password }) {
            token
            user {
                id
                username
                firstName
                lastName
                phone
                email
            }
        }
    }
`;

export const AUTH_SIGNUP = gql`
    mutation CreateUser($data: CreateUserInput!) {
        createUser(data: $data) {
            id
        }
    }
`;
