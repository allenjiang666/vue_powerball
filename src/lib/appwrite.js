import { Client, Functions } from 'appwrite'

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('652afe131ed3df06e501'); // Replace with your project ID

export const functions = new Functions(client)

