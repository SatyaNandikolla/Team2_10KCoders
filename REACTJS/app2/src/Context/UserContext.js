import React from "react";
const UserContext = React.createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;//both are similar to the component
export {
    UserProvider, UserConsumer
};