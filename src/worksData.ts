const worksData = [
  {
    title: "Smoke Break",
    tags: ["portfolio"],
    images: {
      large: "/works/highway-vape/highway-vape-large.jpg",
      medium: "/works/highway-vape/highway-vape-medium.jpg",
      small: "/works/highway-vape/highway-vape-small.jpg",
    },
  },
  {
    title: "Rainbow Trout",
    tags: ["portfolio"],
    images: {
      large: "/works/flyrod-rainbow-trout/flyrod-rainbow-trout-large.jpg",
      medium: "/works/flyrod-rainbow-trout/flyrod-rainbow-trout-medium.jpg",
      small: "/works/flyrod-rainbow-trout/flyrod-rainbow-trout-small.jpg",
    },
  },
  {
    title: "Street Scene",
    tags: ["portfolio"],
    images: {
      large: "/works/street/street-large.jpg",
      medium: "/works/street/street-medium.jpg",
      small: "/works/street/street-small.jpg",
    },
  },
  {
    title: "Millionaire Shortbread",
    tags: ["portfolio"],
    images: {
      large: "/works/millionaire-shortbread/millionaire-shortbread-large.jpg",
      medium: "/works/millionaire-shortbread/millionaire-shortbread-medium.jpg",
      small: "/works/millionaire-shortbread/millionaire-shortbread-small.jpg",
    },
  },
  {
    title: "Cat with Guitar",
    tags: ["portfolio"],
    images: {
      large: "/works/bolo-cat/bolo-cat-large.png",
      medium: "/works/bolo-cat/bolo-cat-medium.png",
      small: "/works/bolo-cat/bolo-cat-small.png",
    },
  },
  {
    title: "Star Dress",
    tags: ["portfolio"],
    images: {
      large: "/works/star-dress/star-dress-large.jpg",
      medium: "/works/star-dress/star-dress-medium.jpg",
      small: "/works/star-dress/star-dress-small.jpg",
    },
  },
  {
    title: "Western",
    tags: ["portfolio"],
    images: {
      large: "/works/western/western-large.jpg",
      medium: "/works/western/western-medium.jpg",
      small: "/works/western/western-small.jpg",
    },
  },
  {
    title: "Christmas Card 2025",
    tags: ["portfolio"],
    images: {
      large: "/works/christmas-card-2025/christmas-card-2025-large.png",
      medium: "/works/christmas-card-2025/christmas-card-2025-medium.png",
      small: "/works/christmas-card-2025/christmas-card-2025-small.png",
    },
  },
  {
    title: "Cello Dog",
    tags: ["portfolio"],
    images: {
      large: "/works/cello-dog/cello-dog-large.jpg",
      small: "/works/cello-dog/cello-dog-small.jpg",
    },
  },
  {
    title: "Flax Granola",
    tags: ["portfolio", "graphic-design"],
    images: {
      large: "/works/flax-granola/flax-granola-large.jpg",
      small: "/works/flax-granola/flax-granola-small.jpg",
    },
  },
  {
    title: "Tarantula",
    tags: ["portfolio"],
    images: {
      large: "/works/tarantula/tarantula-large.png",
      medium: "/works/tarantula/tarantula-medium.png",
      small: "/works/tarantula/tarantula-small.png",
    },
  },
  {
    title: "Austen Puzzle",
    tags: ["portfolio"],
    images: {
      large: "/works/austen-puzzle/austen-puzzle-large.jpg",
      medium: "/works/austen-puzzle/austen-puzzle-medium.jpg",
      small: "/works/austen-puzzle/austen-puzzle-small.jpg",
    },
  },
  {
    title: "Astoria Park",
    tags: ["portfolio"],
    images: {
      large: "/works/astoria-park/astoria-park-large.jpg",
      medium: "/works/astoria-park/astoria-park-medium.jpg",
      small: "/works/astoria-park/astoria-park-small.jpg",
    },
  },
  {
    title: "Sunhead",
    tags: ["portfolio"],
    images: {
      large: "/works/sunhead/sunhead-large.jpg",
      small: "/works/sunhead/sunhead-small.jpg",
    },
  },
  {
    title: "Astoria Poster",
    tags: ["portfolio"],
    images: {
      large: "/works/astoria-poster/astoria-poster-large.jpg",
      medium: "/works/astoria-poster/astoria-poster-medium.jpg",
      small: "/works/astoria-poster/astoria-poster-small.jpg",
    },
  },
  {
    title: "Angel",
    tags: ["portfolio"],
    images: {
      large: "/works/angel/angel-large.png",
      small: "/works/angel/angel-small.png",
    },
  },
  {
    title: "George",
    tags: ["portfolio"],
    images: {
      large: "/works/george/george-large.png",
      medium: "/works/george/george-medium.png",
      small: "/works/george/george-small.png",
    },
  },
  {
    title: "Cento",
    tags: ["portfolio"],
    images: {
      large: "/works/cento/cento-large.png",
      small: "/works/cento/cento-small.png",
    },
  },
  {
    title: "Little Women",
    tags: ["portfolio"],
    images: {
      large: "/works/little-women/little-women-large.jpg",
      small: "/works/little-women/little-women-small.jpg",
    },
  },
  {
    title: "Self Portrait, Kitchen",
    tags: ["portfolio"],
    images: {
      large: "/works/self-portrait-kitchen/self-portrait-kitchen-large.jpg",
      medium: "/works/self-portrait-kitchen/self-portrait-kitchen-medium.jpg",
      small: "/works/self-portrait-kitchen/self-portrait-kitchen-small.jpg",
    },
  },
  {
    title: "Industrial Street",
    tags: ["portfolio"],
    images: {
      large: "/works/industrial-street/industrial-street-large.png",
      medium: "/works/industrial-street/industrial-street-medium.png",
      small: "/works/industrial-street/industrial-street-small.png",
    },
  },
  {
    title: "Ouija",
    tags: ["portfolio"],
    images: {
      large: "/works/ouija/ouija-large.png",
      medium: "/works/ouija/ouija-medium.png",
      small: "/works/ouija/ouija-small.png",
    },
  },
  {
    title: "Boy in Field",
    tags: ["portfolio"],
    images: {
      large: "/works/boy-field/boy-field-large.jpg",
      medium: "/works/boy-field/boy-field-medium.jpg",
      small: "/works/boy-field/boy-field-small.jpg",
    },
  },
  {
    title: "Egg, Ham, and Chips",
    tags: ["portfolio"],
    images: {
      large: "/works/egg-ham-and-chips/egg-ham-and-chips-large.jpg",
      medium: "/works/egg-ham-and-chips/egg-ham-and-chips-medium.jpg",
      small: "/works/egg-ham-and-chips/egg-ham-and-chips-small.jpg",
    },
  },
  {
    title: "Self Portrait",
    tags: ["portfolio"],
    images: {
      large: "/works/self-portrait/self-portrait-large.jpg",
      small: "/works/self-portrait/self-portrait-small.jpg",
    },
  },
  {
    title: "Beetle Party",
    tags: ["portfolio", "patterns"],
    images: {
      large: "/works/beetle-party/beetle-party-large.png",
      small: "/works/beetle-party/beetle-party-small.png",
    },
  },
  {
    title: "Irish Stew",
    tags: ["portfolio"],
    images: {
      large: "/works/irish-stew/irish-stew-large.jpg",
      medium: "/works/irish-stew/irish-stew-medium.jpg",
      small: "/works/irish-stew/irish-stew-small.jpg",
    },
  },
  {
    title: '"The Octopus" Poster',
    tags: ["graphic-design"],
    images: {
      large: "/works/the-octopus-poster/the-octopus-poster-large.jpg",
      small: "/works/the-octopus-poster/the-octopus-poster-small.jpg",
    },
  },
  {
    title: "Bread Testimonial",
    tags: ["graphic-design"],
    images: {
      large: "/works/bread-testimonial/bread-testimonial-large.jpg",
      medium: "/works/bread-testimonial/bread-testimonial-medium.jpg",
      small: "/works/bread-testimonial/bread-testimonial-small.jpg",
    },
  },
  {
    title: "Granola Label",
    tags: ["graphic-design"],
    images: {
      large: "/works/granola-label/granola-label-large.png",
      medium: "/works/granola-label/granola-label-medium.png",
      small: "/works/granola-label/granola-label-small.png",
    },
  },
  {
    title: '"All is Well" Poster',
    tags: ["graphic-design"],
    images: {
      large: "/works/all-is-well-poster/all-is-well-poster-large.jpg",
      small: "/works/all-is-well-poster/all-is-well-poster-small.jpg",
    },
  },
  {
    title: '"All is Well" Poster, Alternate Version',
    tags: ["graphic-design"],
    images: {
      large: "/works/all-is-well-poster-alt/all-is-well-poster-alt-large.jpg",
      small: "/works/all-is-well-poster-alt/all-is-well-poster-alt-small.jpg",
    },
  },
  {
    title: '"Lightstreet" Poster',
    tags: ["graphic-design"],
    images: {
      large: "/works/lighstreet-poster/lightstreet-poster-large.png",
      small: "/works/lighstreet-poster/lightstreet-poster-small.png",
    },
  },
  {
    title: '"No Pets" Poster',
    tags: ["graphic-design"],
    images: {
      large: "/works/no-pets-poster/no-pets-poster-large.png",
      medium: "/works/no-pets-poster/no-pets-poster-medium.png",
      small: "/works/no-pets-poster/no-pets-poster-small.png",
    },
  },
  {
    title: "B-Day Info",
    tags: ["graphic-design"],
    images: {
      large: "/works/bday-info/bday-info-large.jpg",
      medium: "/works/bday-info/bday-info-medium.jpg",
      small: "/works/bday-info/bday-info-small.jpg",
    },
  },
  {
    title: "Iluma",
    tags: ["graphic-design"],
    images: {
      large: "/works/iluma/iluma-large.jpg",
      medium: "/works/iluma/iluma-medium.jpg",
      small: "/works/iluma/iluma-small.jpg",
    },
  },
  {
    title: '"Panerica" Poster',
    tags: ["graphic-design"],
    images: {
      large: "/works/panerica-poster/panerica-poster-large.png",
      small: "/works/panerica-poster/panerica-poster-small.png",
    },
  },
  {
    title: "Web Development",
    tags: ["web-development"],
    images: {
      large: "/works/web-development/web-development-small.png",
      small: "/works/web-development/web-development-small.png",
    },
  },
  {
    title: "Winter Bird Pattern",
    tags: ["patterns"],
    images: {
      large: "/works/winter-birds-pattern/winter-birds-pattern-large.jpg",
      medium: "/works/winter-birds-pattern/winter-birds-pattern-medium.jpg",
      small: "/works/winter-birds-pattern/winter-birds-pattern-small.jpg",
    },
  },
  {
    title: "Winter Botanical Pattern",
    tags: ["patterns"],
    images: {
      large:
        "/works/winter-botanical-pattern/winter-botanical-pattern-large.jpg",
      medium:
        "/works/winter-botanical-pattern/winter-botanical-pattern-medium.jpg",
      small:
        "/works/winter-botanical-pattern/winter-botanical-pattern-small.jpg",
    },
  },
  {
    title: "Snowy Village Pattern",
    tags: ["patterns"],
    images: {
      large: "/works/snowy-village-pattern/snowy-village-pattern-large.jpg",
      medium: "/works/snowy-village-pattern/snowy-village-pattern-medium.jpg",
      small: "/works/snowy-village-pattern/snowy-village-pattern-small.jpg",
    },
  },
  {
    title: "Seashell Pattern",
    tags: ["patterns"],
    images: {
      large: "/works/seashell-pattern/seashell-pattern-large.jpg",
      medium: "/works/seashell-pattern/seashell-pattern-medium.jpg",
      small: "/works/seashell-pattern/seashell-pattern-small.jpg",
    },
  },
];

export default worksData;
export const categories = [
  "patterns",
  "graphic-design",
  "web-development",
  "patterns",
];
