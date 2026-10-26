import "./Home.scss";
import WorkPage from "../../components/WorkPage/WorkPage";
import { categories } from "../../worksData";

export default function HomePage() {
  return (
    <>
      <WorkPage categories={categories} />
    </>
  );
}
