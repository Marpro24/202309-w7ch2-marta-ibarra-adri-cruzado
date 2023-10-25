import { useEffect, useState } from "react";
import Character from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";

interface CharacterProps {
  id: number;
  name: string;
  height: number;
  mass: number;
  creationDate: number;
  picture: string;
}

const CharacterList = (): React.ReactElement => {
  const [list, setList] = useState<Character[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      const apiUrl =
        "https://starwars-characters-api-qcun.onrender.com/characters";
      const response = await fetch(apiUrl);
      const characterData = (await response.json()) as CharacterProps[];
      setList(characterData);
    };

    getCharacters();
  }, []);

  return (
    <div>
      <ul className="card__list">
        {list.map(
          (character, position): React.ReactElement => (
            <li key={position}>
              <CharacterCard character={character} picture={""} />
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default CharacterList;
