// Define the AboutMe component
function AboutMe() {
  // Return JSX for the About Me section
  return (
    <section className="container py-4 mb-4">
      <div className="row m-auto">
        <h1 className="mb-4 text-center">About me</h1>
        <div className="col-md-4 d-flex align-item-center">
          <img
            src="./IMG_0546.jpg"
            alt="Profile picture"
            className=" mr-3 mt-3 mb-5 rounded-circle"
            width="350px"
            height="450px"
          />
        </div>
        <div className="col-md-8 d-flex align-items-center about-mobile">
          <p
            className=" p-2 text-center"
            style={{ backgroundColor: "#ebd9d1" }}
          >
            Hi! I'm Karina, I am a passionate Full Stack Web Developer with a
            strong foundation in both front-end and back-end technologies. My
            journey in web development began with a curiosity-driven exploration
            of HTML, CSS, and JavaScript, which eventually evolved into a
            deep-seated love for crafting robust, user-centric web applications.
            I recently grraduated from a ful stack bootcamp at the University of
            Toronto, and am excited to continue my journey as a developer. I
            have honed my skills in various programming languages, frameworks,
            and tools, allowing me to create seamless digital experiences that
            meet the needs of modern businesses and users alike.
          </p>
        </div>
      </div>
    </section>
  );
}

// Export the AboutMe component as the default export
export default AboutMe;
