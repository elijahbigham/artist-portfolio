import { useParams } from "react-router";
import worksData from "../../worksData";
import "./WorkDetail.scss";

export default function WorkDetail() {
  const { workSlug } = useParams();
  const work = worksData.find((item) => item.slug === workSlug);

  if (!work) {
    return <h1>Work not found</h1>;
  }

  const image = work.images.large ?? work.images.medium ?? work.images.small;

  return (
    <article className="work-detail">
      <img src={image} alt={work.title} />
    </article>
  );
}
