import { FC } from "react";
import ExerciseSelector from "../components/ExerciseSelector";
import ProgressBar from "../components/ProgressBar";

interface TrainingProps {
    
}
 
const Training: FC<TrainingProps> = () => {
    return (
		<div className=' flex flex-col gap-10 items-center justify-center pt-16 text-slate-900'>
            <ExerciseSelector />
            <ProgressBar/>
		</div>
	);
}
 
export default Training;