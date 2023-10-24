import Character from "../../types";

interface CharacterCardProps {
character: Character
}

const CharacterCard = ({

  character: {name, picture, height, mass, creationDate},
}: CharacterCardProps): React.ReactElement => {
  return (
    <article> 
<h2 className="character__name">{name}</h2>
<img src={picture}/>
<span className="character__height">{height}</span>
<span className="character__mass">{mass}</span>
<span className="character__creation">{creationDate} </span>
    </article>
  );
};
export default CharacterCard
