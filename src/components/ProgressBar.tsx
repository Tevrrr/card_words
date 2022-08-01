import { FC } from "react";

interface ProgressBarProps {
    
}
 
const ProgressBar: FC<ProgressBarProps> = () => {
    return (
		<div className=' w-full max-w-sm flex flex-col gap-2 bg-slate-200 p-2 rounded-2xl shadow-md text-lg font-semibold text-slate-900'>
			<p> Progress: 25/100</p>
			<div className=' h-4 w-full rounded-full bg-yellow-400'>
				<div
					className={`h-4 w-[${
						25 / 100 * 100
					}%] rounded-full bg-green-600`}></div>
			</div>
		</div>
	);
}
 
export default ProgressBar;