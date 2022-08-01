import { FC } from "react";
import DeckCard from "../components/DeckCard";

interface DecksProps {
    
}
 
const Decks: FC<DecksProps> = () => {
    return (
		<div className=' p-5 flex flex-wrap gap-10'>
			<DeckCard />
		</div>
	);
}
 
export default Decks;