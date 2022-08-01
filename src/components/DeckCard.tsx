import { FC } from "react";

interface DeckCardProps {
    
}
 
const DeckCard: FC<DeckCardProps> = () => {
    return (
		<div className=' relative p-4'>
			<div className=' cursor-pointer hover:scale-105 transition-all duration-150 bg-sky-700  relative z-10 w-56 h-80 border-4 border-slate-900 px-4 py-10 rounded-2xl flex flex-col justify-between items-center text-sky-50 text-3xl font-semibold'>
				<p>Deck 1</p>
				<i className=' text-6xl fa-solid fa-brain'></i>
				<p>60 cards</p>
			</div>
			<div className='bg-sky-900 rotate-6  left-4 top-0  absolute w-56 h-80 border-4 border-slate-900 px-4 py-10 rounded-2xl flex flex-col justify-between items-center text-3xl'></div>

			<div className='bg-sky-800 rotate-3  left-4 top-2  absolute w-56 h-80 border-4 border-slate-900 px-4 py-10 rounded-2xl flex flex-col justify-between items-center text-3xl'></div>
		</div>
	);
}
 
export default DeckCard;