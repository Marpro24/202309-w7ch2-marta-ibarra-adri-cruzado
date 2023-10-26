import Character from "../../types";

interface CharacterCardProps {
  character: Character;
  picture: string;
}

const CharacterCard = ({
  character: { name, id, height, mass, creationDate },
}: CharacterCardProps): React.ReactElement => {
  return (
    <article className="character__container">
      <h2 className="character__name">{name}</h2>
      <img
        className="character__image"
        width="396"
        height="496"
        alt={`${name}`}
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />
      <div className="character__data">
        <span className="character__height">
          {" "}
          Height: <span className="character__stats">{height}</span>
        </span>
        <span className="character__mass">
          Mass: <span className="character__stats">{mass}</span>
        </span>
        <span className="character__creation">
          Creation Date:{" "}
          <span className="character__stats">{creationDate}</span>
        </span>
      </div>
    </article>
  );
};
export default CharacterCard;
