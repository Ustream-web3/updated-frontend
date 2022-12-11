import React from 'react'
import { FaWallet } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Main = () => {
	const {isWalletOpen}= useGlobalContext()

	if (isWalletOpen) {
		 return (
		<div className="wallet">
			<h2>Wallet <FaWallet/></h2>
			<h4>connnect to wallet</h4>
			<div className="wallets">
				<ul>
					<li>
						<p>Metamask</p> <input type="radio" name="wallets" id="" />
					</li>
					<li>
						<p>Trustwallet</p> <input type="radio" name="wallets" id="" />
					</li>
					<li>
						<p>Wallet Connect</p> <input type="radio" name="wallets" id="" />
					</li>
					<li>
						<p>Token Pocket</p> <input type="radio" name="wallets" id="" />
					</li>
					<li>
						<p>Binance Chain</p> <input type="radio" name="wallets" id="" />
					</li>
				</ul>
			</div>
		</div>
	);
	}
	else{
		return <></>
	}
 
}

export default Main
