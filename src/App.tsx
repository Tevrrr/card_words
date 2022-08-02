/** @format */

import { FC } from 'react';
import Aside from './components/Aside';
import Card from './components/Card';
import Decks from './pages/Decks';
import Training from './pages/Training';

const App: FC = () => {
	return (
		<div className=' w-full min-h-screen pl-16 bg-sky-50'>
			<Aside />
            <div className='min-h-screen flex items-center justify-center'>
                {/* <Training /> */}
                {/* <Decks/> */}
                <Card/>
            </div>
		</div>
	);
};

export default App;
