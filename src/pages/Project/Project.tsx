import { useParams } from "react-router";
import WorkGrid from "../../components/WorkGrid/WorkGrid";
import worksData from "../../worksData";

export default function ProjectPage() {
  const { projectSlug } = useParams();
  const works = worksData.filter((work) => work.project?.slug === projectSlug);
  const project = works[0]?.project;

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <>
      <h1>{project.title}</h1>
      <WorkGrid works={works} />
    </>
  );
}
