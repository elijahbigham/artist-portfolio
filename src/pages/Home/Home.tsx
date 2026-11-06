import "./Home.scss";
import WorkPage from "../../components/WorkPage/WorkPage";

export default function HomePage() {
  return (
    <>
      <WorkPage categories={[{ value: "fine-arts", label: "Fine Arts" }]} />
    </>
  );
}
