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
  const { large, medium } = work.images;
  const small = work.images.small ?? medium ?? large;
  const image = (
    <picture>
      {large && <source srcSet={large} media="(min-width: 1024px)" />}
      {medium && <source srcSet={medium} media="(min-width: 768px)" />}
      <source srcSet={small} media="(min-width: 480px)" />
      <img src={small} alt={work.title} />
    </picture>
  );

  return (
    <Link
      className="work"
      to={project ? `/projects/${project.slug}` : `/works/${work.slug}`}
      aria-label={`${work.title} ${project ? "- " + project.title : ""}`}
    >
      {image}
    </Link>
  );
}
