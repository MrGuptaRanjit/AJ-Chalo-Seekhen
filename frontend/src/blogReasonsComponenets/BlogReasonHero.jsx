import "./BlogReasonHero.css";
import heroImg from "/blogreasonimage/reason.png";

const BlogReasonHero = () => {
  return (
    <section
      className="blog-reason-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* overlay */}
      <div className="blog-reason-overlay"></div>

      {/* content */}
      <div className="blog-reason-content">
        <h1>
          5 Reasons Why Personalized <br />
          Career Counseling is a Game- <br />
          Changer for Students
        </h1>

        <p>
          It uncovers students&apos; potential and aligns their passions with the
          right career paths, leading to long-term success.
        </p>
      </div>
    </section>
  );
};

export default BlogReasonHero;
