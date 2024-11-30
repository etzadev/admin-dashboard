import "./searchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <form
        action="#"
        method="POST"
        className="search-form d-flex align-items-center"
      >
        <input
          type="text"
          name="search"
          placeholder="Search..."
          title="Ingrese su búsqueda"
        />
        <button type="submit" title="Search">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
}
