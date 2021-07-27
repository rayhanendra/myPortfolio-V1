import { useContext } from "react";
import { ProjectStore } from "context/store";

const useDataProject = () => {
  return useContext(ProjectStore);
};

const useTypeFilter = (type) => {
  let filter =
    type === 1
      ? "WEB DEV"
      : type === 2
      ? "UI/UX"
      : type === 3
      ? "GRAPHIC DESIGN"
      : type === 4
      ? "GAME DEVELOPMENT"
      : "";

  return filter;
};

export { useDataProject, useTypeFilter };
