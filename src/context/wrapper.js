import { ProjectStore } from "./store";

const ProjectWrapper = (props) => {
  const { children, dataProject } = props;
  return (
    <ProjectStore.Provider value={{ dataProject }}>
      {children}
    </ProjectStore.Provider>
  );
};

export { ProjectWrapper };
