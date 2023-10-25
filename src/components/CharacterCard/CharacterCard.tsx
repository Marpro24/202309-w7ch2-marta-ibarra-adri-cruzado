import Character from "../../types";

interface CharacterCardProps {
  character: Character;
  picture: number;
}

const CharacterCard = ({
  character: { name, id, height, mass, creationDate },
}: CharacterCardProps): React.ReactElement => {
  return (
    <article>
      <h2 className="character__name">{name}</h2>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />
      <span className="character__height"> Height: {height}</span>
      <span className="character__mass">Mass: {mass}</span>
      <span className="character__creation">Creation Date:{creationDate}</span>
    </article>
  );
};
export default CharacterCard;
