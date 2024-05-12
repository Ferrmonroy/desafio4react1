import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-center p-3">
        <div className="footer-icon">
          <a
            href="https://www.facebook.com/profile.php?id=100010363291273&locale=es_LA"
            target="blank"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/ferrmonroy/" target="blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://wa.me/56959044961/?text=Información" target="blank">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <p className="m-0">
          ©QOG 2024. Todos los derechos reservados. Catálogo de juegos
          actualizado.
        </p>
        <p>Para consultar por más juegos, contactar por redes sociales.</p>
      </footer>
    </>
  );
}
