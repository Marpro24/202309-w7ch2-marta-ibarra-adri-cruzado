import { useEffect, useState } from "react";
import Character from "../../types";
import CharacterCard from "../CharacterCard/CharacterCard";

interface CharacterData {
  id: number;
  count: number;
  next: string;
  previous: null;
  results: Character[];
}

const CharacterList = (): React.ReactElement => {
  const [list, setList] = useState<Character[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      const apiUrl = "https://swapi.dev/api/people/";
      const response = await fetch(apiUrl);
      const characterPromise = (await response.json()) as CharacterData;
      setList(characterPromise.results);
    };
    getCharacters();
  }, []);
  return (
    <div>
      <ul className="card__list">
        {list.slice(0, 9).map(
          (character, position): React.ReactElement => (
            <li key={position}>
              <CharacterCard character={character} picture={position + 1} />
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default CharacterList;
