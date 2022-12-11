import React from 'react'
import { useGlobalContext } from '../context';
const Earning = () => {
 	const { isEarningsOpen } = useGlobalContext();

	if (isEarningsOpen) {
		return (
			<div className="earnings">
				<h2>
					Wallet 
				</h2>
				<h4>connnect to wallet</h4>
				
			</div>
		);
	} else {
		return <></>;
	}
}

export default Earning
