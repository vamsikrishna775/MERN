const express = require('express');
const router = express.Router();
const typeDefs = require('../schema');
const resolvers = require('../resolvers');
const { ApolloServer, gql } = require('apollo-server-express');

const server = new ApolloServer({ typeDefs, resolvers });

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const { data, errors } = await server.executeOperation({
            query: gql`
                mutation($input: CreateUserInput!) {
                    createUser(input: $input) {
                        name
                        email
                    }
                }
            `,
            variables: { input: { name, email, password } },
        });
        if (errors) {
            return res.status(500).send({ message: errors });
        }
        res.status(201).send({ data });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const { data, errors } = await server.executeOperation({
            query: gql`
                mutation($input: LoginUserInput!) {
                    loginUser(input: $input) {
                        token
                        user {
                            name
                            email
                        }
                    }
                }
            `,
            variables: { input: { email, password } },
        });
        if (errors) {
            return res.status(500).send({ message: errors });
        }
        res.status(200).send({ data });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;
