import { createContext } from "react";
import AnalylticsAPI from "./services/AnalyticsAPI";
import MockedAPI from "./dev/MockedAPI";

interface AppContextValues {
  api?: AnalylticsAPI;
}

export const AppContext = createContext<AppContextValues >({});

export function createAppContextValues(env?: string): AppContextValues {
  // create context values based on the environment
  // returns an AppContextValues instance

  if (env === "production") {
    return {
      api: new MockedAPI(), // to change
    };
  } else if (env === "qa") {
    return {
      api: new MockedAPI(), // to change
    };
  }

  // development
  return {
    api: new MockedAPI(),
  };
}
