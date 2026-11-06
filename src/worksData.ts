export type Size = "large" | "medium" | "small";

export interface Work {
  title: string;
  tags: string[];
  images: Partial<Record<Size, string>>;
}

const work = (
  folder: string,
  title: string,
  tags: string[],
  ext: "jpg" | "png" = "jpg",
  sizes: Size[] = ["large", "medium", "small"],
): Work => ({
  title,
  tags,
  images: Object.fromEntries(
    sizes.map((size) => [size, `/works/${folder}/${folder}-${size}.${ext}`]),
  ),
});

const GD = ["graphic-design"];
const CI = ["childrens-illustration"];
const FA = ["fine-arts"];
const LS: Size[] = ["large", "small"];
const L: Size[] = ["large"];
const S: Size[] = ["small"];

const worksData: Work[] = [
  work("highway-vape", "Smoke Break", FA),
  work("flyrod-rainbow-trout", "Rainbow Trout", CI),
  work("street", "Street Scene", CI),
  work("millionaire-shortbread", "Millionaire Shortbread", CI),
  work(
    "bolo-cat",
    "Cat with Guitar",
    ["childrens-illustration", "fine-arts"],
    "png",
  ),
  work("star-dress", "Star Dress", CI),
  work("western", "Western", CI),
  work("christmas-card-2025", "Christmas Card 2025", CI, "png"),
  work(
    "cello-dog",
    "Cello Dog",
    ["childrens-illustration", "fine-arts"],
    "jpg",
    LS,
  ),
  work("flax-granola", "Flax Granola", GD, "jpg", LS),
  work("tarantula", "Tarantula", FA, "png"),
  work("austen-puzzle", "Austen Puzzle", CI),
  work("astoria-park", "Astoria Park", CI),
  work("sunhead", "Sunhead", CI, "jpg", LS),
  work("astoria-poster", "Astoria Poster", GD),
  work("angel", "Angel", ["childrens-illustration", "fine-arts"], "png", LS),
  work("cento", "Cento", FA, "png", LS),
  work("little-women", "Little Women", CI, "jpg", LS),
  work("self-portrait-kitchen", "Self Portrait, Kitchen", FA),
  work("industrial-street", "Industrial Street", CI, "png"),
  work("ouija", "Ouija", CI, "png"),
  work("egg-ham-and-chips", "Egg, Ham, and Chips", CI),
  work("self-portrait", "Self Portrait", FA, "jpg", LS),
  work("beetle-party", "Beetle Party", CI, "png", LS),
  work("irish-stew", "Irish Stew", CI),
  work("the-octopus-poster", '"The Octopus" Poster', GD, "jpg", LS),
  work("bread-testimonial", "Bread Testimonial", GD),
  work("granola-label", "Granola Label", GD, "png"),
  work("all-is-well-poster", '"All is Well" Poster', GD, "jpg", LS),
  work(
    "all-is-well-poster-alt",
    '"All is Well" Poster, Alternate Version',
    GD,
    "jpg",
    LS,
  ),
  work("lightstreet-poster", '"Lightstreet" Poster', GD, "png", LS),
  work("no-pets-poster", '"No Pets" Poster', GD, "png"),
  work("bday-info", "B-Day Info", GD),
  work("iluma", "Iluma", GD),
  work("panerica-poster", '"Panerica" Poster', GD, "png", LS),
  work("web-development", "Web Development", GD, "png", S),
  work("seashell-pattern", "Seashell Pattern", CI),
  work("battleship", "Battleship", CI),
  work("central-park", "Central Park", CI),
  work("christmas-ornaments", "Christmas Ornaments", CI),
  work("constantine", "Constantine", CI),
  work("coral-pattern", "Coral Pattern", CI),
  work("fish-ocean-pattern", "Fish Ocean Pattern", CI),
  work("flax-granola-infographic", "Flax Granola Infographic", GD),
  work("flyrod-cover", "Flyrod Cover", CI),
  work("girl-and-dog-soccer", "Girl and Dog Playing Soccer", CI, "jpg", L),
  work("girls-running", "Girls Running", CI),
  work("going-green-with-constantine", "Going Green with Constantine", CI),
  work("haunted-interior", "Haunted Interior", CI, "jpg", L),
  work("junk-food-pattern", "Junk Food Pattern", CI, "jpg", LS),
  work("ocean-creatures-pattern", "Ocean Creatures Pattern", CI),
  work("octopus-builder", "Octopus Builder", CI),
  work("pig-and-pumpkins", "Pig and Pumpkins", CI, "png", L),
  work(
    "pig-autumn-leaves-pumpkins",
    "Pig, Autumn Leaves and Pumpkins",
    CI,
    "jpg",
    L,
  ),
  work("pig-in-vegetable-garden", "Pig in Vegetable Garden", CI, "png"),
  work("pink-floral-pattern", "Pink Floral Pattern", CI, "jpg", LS),
  work("submarine-coral-reef", "Submarine Coral Reef", CI, "jpg", LS),
  work("toy-robot-bookshelf", "Toy Robot Bookshelf", CI),
  work("underwater-diver", "Underwater Diver", CI),
  work("underwater-mermaid", "Underwater Mermaid", CI, "jpg", L),
  work("window-display", "Window Display", CI, "jpg", L),
];

export default worksData;

export const worksByCategory = new Map<string, Work[]>();

// Populate the worksByCategory map with works grouped by their tags.
for (const work of worksData) {
  for (const tag of work.tags) {
    const list = worksByCategory.get(tag);
    if (list) list.push(work);
    else worksByCategory.set(tag, [work]);
  }
}
export const categories = [
  { label: "Illustration", value: "illustration" },
  { label: "Graphic Design", value: "graphic-design" },
  { label: "Web Development", value: "web-development" },
  { label: "Patterns", value: "patterns" },
  { label: "Children's Illustration", value: "childrens-illustration" },
  { label: "Fine Arts", value: "fine-arts" },
];
