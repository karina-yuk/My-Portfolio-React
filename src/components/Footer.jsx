// Importing React library
import React from "react";
import { SocialIcon } from "react-social-icons";

// Define the Footer component
export default function Footer() {
  return (
    // Render icons containing links to social media, etc.
    <>
      <footer
        className="text-center text-black py-3"
        style={{ backgroundColor: "#ebd9d1" }}
      >
        <div>
          <section className="mb-4">
            <SocialIcon
              bgColor="black"
              url="https://www.linkedin.com/in/karina-li-799a21292/"
            />
            <SocialIcon bgColor="black" url="https://github.com/karina-yuk" />
          </section>
        </div>
      </footer>
    </>
  );
}
