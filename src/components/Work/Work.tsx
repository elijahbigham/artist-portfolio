import "./Work.scss";

interface WorkProps {
  work: {
    title: string;
    images: {
      large?: string;
      medium?: string;
      small?: string;
    };
  };
}

export default function Work({ work }: WorkProps) {
  const { large, medium } = work.images;
  const small = work.images.small ?? medium ?? large;
  return (
    <div className="work">
      <picture>
        {large && <source srcSet={large} media="(min-width: 1024px)" />}
        {medium && <source srcSet={medium} media="(min-width: 768px)" />}
        <source srcSet={small} media="(min-width: 480px)" />
        <img src={small} alt={work.title} />
      </picture>
    </div>
  );
}
