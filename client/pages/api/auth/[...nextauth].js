import React from 'react'
import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';

const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId,
            clientSecret
        }),
    ]
});
