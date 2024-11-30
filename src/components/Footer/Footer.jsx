import "./footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright{" "}
        <strong>
          <span>@etzadev</span>
        </strong>
        . Todos los derechos reservados
      </div>
      <div className="credits">
        Diseñado por <a href="#">David</a>
      </div>
    </footer>
  );
}
