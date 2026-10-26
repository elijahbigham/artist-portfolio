import worksData from "../../worksData";
import Work from "../../components/Work/Work";
import "./WorkPage.scss";

export default function WorkPage({ categories }: { categories: string[] }) {
  const worksDataFiltered = worksData.filter((work) =>
    work.tags.some((tag) => categories.includes(tag)),
  );
  return (
    <div className="work-grid">
      {worksDataFiltered.map((work) => (
        <Work key={work.title} work={work} />
      ))}
    </div>
  );
}
