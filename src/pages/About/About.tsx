import "./About.scss";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <div className="about-content">
        <img
          src="/headshot.webp"
          alt="Billie Michael"
          className="about-image"
        />
        <p>
          Hello! I'm a Philadelphia-based graphic designer and illustrator. I
          graduated with a BA in Fine Art from the Santa Fe University of Art
          and Design in 2017. I like to create drawings and graphics that are
          bursting with color, pattern, and personality. Please contact me at{" "}
          <a href="mailto:billemiche@gmail.com">billemiche@gmail.com</a>. Find
          me on instagram at{" "}
          <a
            href="https://www.instagram.com/billiemichael"
            target="_blank"
            rel="noopener noreferrer"
          >
            @billiemichael
          </a>
        </p>
      </div>
    </div>
  );
}
