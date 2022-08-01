import { FC } from "react";

interface ExerciseSelectorProps {
    
}
 
const ExerciseSelector: FC<ExerciseSelectorProps> = () => {
    return (
		<div className='flex gap-4'>
			<div className='tile large'>
				<i className='fa-solid fa-flag-checkered'></i>
				<p>Standard exercise</p>
			</div>
			<div className=' flex flex-col gap-4 '>
				<div className=' flex gap-4'>
					<div className=' tile small'>
						<i className='fa-solid fa-keyboard'></i>
						<p>Writing</p>
					</div>

				</div>
				<div className=' flex gap-4'>
					<div className=' tile small'>
						<i className='fa-solid fa-eye'></i>
						<p>Viewing</p>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default ExerciseSelector;