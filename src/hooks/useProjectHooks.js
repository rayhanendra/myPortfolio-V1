import { useContext } from "react";
import { ProjectStore } from "context/store";

const useDataProject = () => {
  return useContext(ProjectStore);
};

const useTypeFilter = (type) => {
  let filter =
    type === 0
      ? "UI/UX"
      : type === 1
      ? "WEB DEV"
      : type === 2
      ? "GRAPHIC DESIGN"
      : "";

  return filter;
};

export { useDataProject, useTypeFilter };
