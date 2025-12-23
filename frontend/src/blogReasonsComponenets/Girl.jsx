import "./Girl.css";
import girlImg from "/blogreasonimage/girl.jpg";

const Girl = () => {
  return (
    <>
      <section className="girl-section">
        <div className="girl-container">
          {/* Left heading */}
          <h2 className="girl-heading">
            Unveiling the <br /> hidden truth
          </h2>

          {/* Right image */}
          <div className="girl-image-wrapper">
            <img src={girlImg} alt="Unveiling the hidden truth" />
          </div>
        </div>
      </section>

      {/* Text content */}
      <div className="girl-text">
        <p>
          The truth is, too many students make career choices based on incomplete
          information or external pressures from family and society. Whether
          it’s opting for a popular career trend or following in the footsteps
          of parents, students often overlook their own passions and talents.
        </p>

        <p>
          <strong>Personalized career counseling</strong> peels back those layers
          of uncertainty and reveals a student’s true potential. Instead of
          making decisions blindly, students are empowered to pursue paths that
          align with their core values and natural abilities.
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </>
  );
};

export default Girl;
