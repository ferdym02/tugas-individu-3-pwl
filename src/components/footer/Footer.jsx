import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} Tugas Individu 3 Pemrograman Web Lanjut.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
