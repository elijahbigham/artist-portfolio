import type { Work as WorkData } from "../../worksData";
import Work from "../Work/Work";
import "../WorkPage/WorkPage.scss";

export default function WorkGrid({
  works,
  linkProjects = false,
}: {
  works: WorkData[];
  linkProjects?: boolean;
}) {
  return (
    <div className="work-grid">
      {works.map((work) => (
        <Work
          key={work.title}
          work={work}
          project={linkProjects ? work.project : undefined}
        />
      ))}
    </div>
  );
}
