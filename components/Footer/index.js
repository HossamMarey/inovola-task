import Link from "next/link";
import React from "react";

const MainFooter = () => {
  return (
    <footer>
      <div className="container border-t border-gray-200 py-6 text-center text-gray-400 text-sm">
        © 2020
        <Link href="/">
          <a className="text-secondary hover:underline"> Academy. </a>
        </Link>
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default MainFooter;
