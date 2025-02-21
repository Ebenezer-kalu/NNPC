import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="NNPC Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Who we are</a></li>
          <li><a href="#">Investors</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Our Businesses</a></li>
          <li><a href="#">Insights</a></li>
          <li><a href="#" style={{ backgroundColor: "green",padding:"17px",alignContent:"center" }}>Contact Us</a></li>
          <li><a href="#" style={{ backgroundColor: "green",marginLeft:"-29px", padding:"17px",alignContent:"center" }}>&gt;&gt;</a></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
