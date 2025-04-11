import React from "react";
import * as ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import "./index.css";
import "@fontsource/reggae-one";
import { LanguageProvider } from "./context/LanguageContext";

<link
  href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
  rel="stylesheet"
/>;

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ApolloProvider>
);
