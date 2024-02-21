import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex flex-col sm:flex-row sm:block absolute md:top-0 right-0 mt-4 mr-4">
      <Link
        href="https://www.linkedin.com/in/deniz-orsel-60243563/"
        target="_blank"
      >
        <button className="mb-2 sm:mb-0">Linkedin</button>
      </Link>
      <Link href="https://github.com/denizorsel" target="_blank">
        <button className="mb-2 sm:mb-0">Github</button>
      </Link>
      <Link href="https://www.artstation.com/denizorsel" target="_blank">
        <button className="mb-2 sm:mb-0">Artstation</button>
      </Link>
    </nav>
  );
};

export default Navigation;
