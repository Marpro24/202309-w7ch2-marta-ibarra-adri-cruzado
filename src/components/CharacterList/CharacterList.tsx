import Character from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";

interface CharacterListProps {
  character: Character;
}

const CharacterList = ({
  character,
}: CharacterListProps): React.ReactElement => {
  return (
    <div>
      <ul>
        <li>
          <CharacterCard character={character} />
        </li>
      </ul>
    </div>
  );
};

export default CharacterList;
