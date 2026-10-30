import worksData, { worksByCategory } from "../../worksData";
import Work from "../../components/Work/Work";
import "./WorkPage.scss";

export default function WorkPage({
  categories,
}: {
  categories?: { value: string; label: string }[];
}) {
  const worksDataFiltered = categories
    ? [
        ...new Set(
          categories.flatMap(({ value }) => worksByCategory.get(value) ?? []),
        ),
      ]
    : worksData;
  return (
    <div className="work-grid">
      {worksDataFiltered.map((work) => (
        <Work key={work.title} work={work} />
      ))}
    </div>
  );
}
