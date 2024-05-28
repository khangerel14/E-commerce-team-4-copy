import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const AutoProvider = ({ children }: Props) => {
  return (
    <Auth0Provider
      domain="dev-7gtwvyczke6ra0n2.us.auth0.com"
      clientId="OYbhi5QRT2JMxtzT6uHZjmLqIfLLmZ16"
      authorizationParams={{
        redirect_uri: window?.location?.origin + "/middleware",
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AutoProvider;
