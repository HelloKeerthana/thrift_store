import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67e38d9f0031a4deb866"); 

const account = new Account(client);

export { client, account };


