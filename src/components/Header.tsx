import Link from "next/link";
import React from "react";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/horse">
      <a style={linkStyle}>말 정보</a>
    </Link>
  </div>
);

export default Header;
