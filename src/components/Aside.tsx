/** @format */

import { FC, useState } from 'react';

interface AsideProps {}

const Aside: FC<AsideProps> = () => {
	const [close, setСlose] = useState(true);
	const toggle = () => {
		setСlose(!close);
	};
	return (
		<aside className={close ? 'aside__menu close' : 'aside__menu'}>
			<ul className='w-full h-full flex flex-col gap-2 '>
				<li className=' AsideItem'>
					<p className=' flex justify-center items-center flex-nowrap'>
						<i className='fa-solid fa-lines-leaning'></i>CardWords
					</p>
					<button onClick={toggle}>
						<i className='fa-solid fa-bars'></i>
					</button>
				</li>
				<div className=' w-2'></div>
				<li className='AsideItem active'>
					{' '}
					<i className='fa-solid fa-graduation-cap'></i>
					<p>Training</p>
				</li>
				<li className='AsideItem'>
					{' '}
					<i className='fa-solid fa-folder'></i>
					<p>Decks</p>
				</li>
				<li className='AsideItem'>
					{' '}
					<i className='fa-solid fa-chart-pie'></i>
					<p>Stats</p>
				</li>
				<li className=' flex-grow'></li>
				<li className='AsideUser'>
					<i className='fa-solid fa-user'></i>
					<div>
						<p className=' text-xl font-semibold'>Name Name</p>
						<p className=' text-base font-semibold'>Points: 25</p>
					</div>
				</li>
			</ul>
		</aside>
	);
};

export default Aside;
