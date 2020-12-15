import Header from "./components/Header";
import Form from "./components/Form";
import ListUsuarios from "./components/ListUsuarios";

function App() {
  return (
    <div className="container">
      <Header />
      <article>
        <Form />
        <ListUsuarios />
      </article>
    </div>
  );
}

export default App;
