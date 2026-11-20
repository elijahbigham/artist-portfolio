import type { Work as WorkData } from "../../worksData";
import Work from "../Work/Work";
import "../WorkPage/WorkPage.scss";
import "./WorkGrid.scss";

export default function WorkGrid({
  works,
  linkProjects = false,
  categoryClassNames,
}: {
  works: WorkData[];
  linkProjects?: boolean;
  categoryClassNames?: string[];
}) {
  return (
    <div
      className={`work-grid ${categoryClassNames && categoryClassNames.join(" ")} ${linkProjects ? "link-projects" : ""}`}
    >
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
