import "./App.css";
import EventDetails from "./Events/eventDetails";
import TechEventsList from "./Events/TechEventsList";
import NonTechEventsList from "./Events/NonTechEventsList";
import EventsHome from "./Events/eventsHome";

function App() {
  return (
    <div className="App">
      <EventsHome />
      <TechEventsList />
      <NonTechEventsList />
      <EventDetails />
    </div>
  );
}

export default App;
