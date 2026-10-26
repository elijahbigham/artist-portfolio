import "./Work.scss";

interface WorkProps {
  work: {
    title: string;
    images: {
      large: string;
      medium?: string;
      small: string;
    };
  };
}

export default function Work({ work }: WorkProps) {
  return (
    <div className="work">
      <picture>
        <source srcSet={work.images.large} media="(min-width: 1024px)" />
        {work.images.medium && (
          <source srcSet={work.images.medium} media="(min-width: 768px)" />
        )}
        <source srcSet={work.images.small} media="(min-width: 480px)" />
        <img src={work.images.small} alt={work.title} />
      </picture>
    </div>
  );
}
