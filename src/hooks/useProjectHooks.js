import { useContext } from "react";
import { ProjectStore } from "context/store";

const useDataProject = () => {
  return useContext(ProjectStore);
};

export { useDataProject };
