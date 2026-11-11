import { Link } from "react-router";
import type { Project } from "../../worksData";
import "./Work.scss";

interface WorkProps {
  work: {
    slug: string;
    title: string;
    images: {
      large?: string;
      medium?: string;
      small?: string;
    };
  };
  project?: Project;
}

export default function Work({ work, project }: WorkProps) {
  const image = work.images.small ?? work.images.medium ?? work.images.large;

  return (
    <Link
      className="work"
      to={project ? `/projects/${project.slug}` : `/works/${work.slug}`}
      aria-label={`${work.title} ${project ? "- " + project.title : ""}`}
    >
      <img src={image} alt={work.title} loading="lazy" />
      <div className="work-title-overlay">{project && project.title}</div>
    </Link>
  );
}
