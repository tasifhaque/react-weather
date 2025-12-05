import Clarity from "@microsoft/clarity";
import { useEffect, type ReactNode } from "react";

const ClarityProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const projectId = "ugts4nc8el";

    Clarity.init(projectId);
  }, []);

  return children;
};

export default ClarityProvider;
