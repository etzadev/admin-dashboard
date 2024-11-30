import "./nav.css";

export default function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          Tiene 3 mensajes
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              Ver todos
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/items/messages-1.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Maria Hudson</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Hace 25 min</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/items/messages-2.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>Anna Nelson</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Hace 45 min</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="message-item">
          <a href="#">
            <img
              src="assets/items/messages-3.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h4>David Martinez</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Hace 2 hr</p>
            </div>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer">
          <a href="#">Ver todos los mensajes</a>
        </li>
      </ul>
    </li>
  );
}
