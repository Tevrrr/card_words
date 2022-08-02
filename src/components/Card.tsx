import { FC, useState } from 'react';

interface CardProps {
    
}
 
const Card: FC<CardProps> = () => {
    const [open, setOpen] = useState('');
    const toggle = () => {
        if (open === 'open') {
            setOpen('')
        }
        else {
            setOpen('open');
        }
    }
    return (
		<div className={`card ${open}`} onClick={toggle}>
			<div className='front'>front</div>
			<div className='back'>back</div>
		</div>
	);
}
 
export default Card;