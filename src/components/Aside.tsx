/** @format */

import { FC, useState } from 'react';

interface AsideProps {}

const Aside: FC<AsideProps> = () => {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};
	return (
		<aside className={open ? 'aside__menu close' : 'aside__menu'}>
			<ul className='w-full h-full flex flex-col gap-2 '>
				<li className=' AsideItem'>
					<p className=' flex justify-center items-center'>
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
				<li className='AsideItem'>
					<i className='fa-solid fa-user'></i>
				</li>
			</ul>
		</aside>
	);
};

export default Aside;
