import "./App.css";
import "./components/Info/Info";

const App = () => {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <section className="controls">
          <p className="info">0 gentlemen pointing at you</p>
        </section>
      </div>
    </>
  );
};

export default App;
