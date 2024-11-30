import Dashboard from "../Dashboard/Dashboard";
import PageTitle from "../PageTitle/PageTitle";
import "./main.css";

export default function Main() {
  return (
    <main id="main" className="main">
      <PageTitle page="Dashboard" />
      <Dashboard />
    </main>
  );
}
