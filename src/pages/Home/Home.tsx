import "./Home.scss";
import WorkPage from "../../components/WorkPage/WorkPage";
import { categories } from "../../worksData";

export default function HomePage() {
  return (
    <>
      <h1>Billie Michael</h1>
      <WorkPage categories={categories} />
    </>
  );
}
