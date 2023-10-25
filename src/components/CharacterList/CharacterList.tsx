import { useEffect, useState } from "react";
import Character from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";

interface CharacterProps {
  id: number;
  name: string;
  height: number;
  mass: number;
  creationDate: number;
  picture: number;
}

const CharacterList = (): React.ReactElement => {
  const [list, setList] = useState<Character[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      const apiUrl =
        "https://starwars-characters-api-qcun.onrender.com/characters";
      const response = await fetch(apiUrl);
      const characterPromise = (await response.json()) as CharacterProps[];
      setList(characterPromise);
    };
    getCharacters();
  }, []);
  return (
    <div>
      <ul className="card__list">
        {list.map(
          (character, position): React.ReactElement => (
            <li key={position}>
              <CharacterCard character={character} picture={0} />
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default CharacterList;
