export default function NavNotification() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          Tiene 4 notificaciones
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              Ver todas
            </span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem ipsum</h4>
            <p>Dolor sit amet consectetur.</p>
            <p>hace 30 min</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-check-circle text-success"></i>
          <div>
            <h4>Lorem ipsum</h4>
            <p>Dolor sit amet consectetur.</p>
            <p>hace 1 hr</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-x-circle text-danger"></i>
          <div>
            <h4>Lorem ipsum</h4>
            <p>Dolor sit amet consectetur.</p>
            <p>hace 2 hr</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="notification-item">
          <i className="bi bi-info-circle text-primary"></i>
          <div>
            <h4>Lorem ipsum</h4>
            <p>Dolor sit amet consectetur.</p>
            <p>hace 4 hr</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="dropdown-footer">
          <a href="#">Ver todas las notificaciones</a>
        </li>
      </ul>
    </li>
  );
}
