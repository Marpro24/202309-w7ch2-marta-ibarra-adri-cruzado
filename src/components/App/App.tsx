import CharacterList from "../CharacterList/CharacterList";

const App = (): React.ReactElement => {
  return (
    <div className="app__container">
      <header className="main__header">
        <img
          className="logo"
          alt="Star Wars logo"
          src="img/star-wars-logo.webp"
          width="300"
          height="300"
        />
      </header>
      <div>
        <CharacterList />
      </div>
    </div>
  );
};

export default App;
