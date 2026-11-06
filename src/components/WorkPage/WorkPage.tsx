import worksData, { worksByCategory } from "../../worksData";
import WorkGrid from "../WorkGrid/WorkGrid";

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
    <WorkGrid
      works={worksDataFiltered.filter((work) => !work.project || work.project.cover)}
      linkProjects
    />
  );
}
