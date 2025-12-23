import "./Mayank.css";

const Mayank = () => {
  return (
    <section className="mayank-page">
      <div className="mayank-container">

        {/* LEFT CONTENT */}
        <div className="mayank-content">
          <h1 className="mayank-title">Mayank's Journey</h1>

          <p className="mayank-subtitle">
            A Life-Changing Academic Journey: From Struggling Student to CAT Aspirant
          </p>

          <p className="description">
            Hi, I’m Mayank Kumar, and I’d like to share my journey of transformation
            thanks to AJs Chalo Seekhen. When I started, I was a{" "}
            <strong>below-average student</strong> who struggled to participate in
            class and <strong>lacked confidence in core subjects</strong> like math,
            science, and social science.
          </p>

          <p className="description">
            My foundations were weak, and I was unable to express my knowledge
            effectively in exams or communicate well in general.
          </p>

          <p className="description">
            The course helped me tackle my{" "}
            <strong>academic weaknesses</strong> and, most importantly,{" "}
            <strong>boosted my self-confidence</strong>.
          </p>

          <p className="description">
            With the constant guidance of my mentor, I learned how to{" "}
            <strong>improve my communication skills</strong>, structure my answers
            better, and <strong>strengthen my basics</strong> in every subject.
          </p>

          <p className="description">
            Beyond academics, I gained essential life skills—like{" "}
            <strong>time management</strong>, <strong>goal setting</strong>, and{" "}
            <strong>stress management</strong>—that have made a huge difference
            in my overall development.
          </p>

          <p className="description">
            Now, I’m working hard not only on my studies but also as I{" "}
            <strong>prepare for the CAT Entrance Exam</strong>.
          </p>

          <p className="description">
            I can confidently say this course was a{" "}
            <strong>life-changing decision</strong> for me, and I highly recommend
            it to anyone looking to grow academically and personally.
          </p>

          <p className="mayank-sign">
            — <strong>Mayank Kumar</strong> (Class 11th)
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mayank-image">
          <img src="/testimonialimages/mayank.jpg" alt="Mayank Kumar" />
        </div>

      </div>
    </section>
  );
};

export default Mayank;
