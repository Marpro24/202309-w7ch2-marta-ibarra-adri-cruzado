import Character from "../../types";
import CharacterCard from "./CharacterCard";
import { render, screen } from "@testing-library/react";

describe("Given a CharacterCard component", () => {
  describe("When it receives Princess Leia's data", () => {
    test("Then it should show Princess Leia inside a heading", () => {
      const characterData: Character = {
        id: 1,
        name: "Princess Leia",
        height: 165,
        mass: 130,
        creationDate: 1965,
        picture: "https://starwars-visualguide.com/assets/img/characters.jpg",
      };
      render(
        <CharacterCard
          character={characterData}
          picture={`https://starwars-visualguide.com/assets/img/characters/.jpg`}
        />,
      );

      const title = screen.getByRole("heading", { name: characterData.name });

      expect(title).toBeInTheDocument();
    });
  });
});
