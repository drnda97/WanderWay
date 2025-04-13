import React from "react";
import Link from "next/link";

const Header = () => {
  const burgerClickHandler = () => {
    const navbar = document.querySelector("#navbar-default");
    navbar.classList.toggle("hidden");
  };

  return (
    <header className="px-4 py-2">
      <div>LOGO</div>
      <div>
        <Link href="#features">Feature</Link>
        <Link href="#features">Feature</Link>
        <Link href="#features">Feature</Link>
      </div>
    </header>
  );
};
export default Header;
