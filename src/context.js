import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isWalletOpen, setIsWalletOpen] = useState(false);
	const [isEarningsOpen, setIsEarningsOpen] = useState(false);

	const openWallet = () => {
		setIsWalletOpen(true);
	};
	const closeWallet = () => {
		setIsWalletOpen(false);
	};

	const openEarnings = () => {
		setIsEarningsOpen(true);
	};
	const closeEarnings = () => {
		setIsEarningsOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isWalletOpen,
				isEarningsOpen,
				openEarnings,
				closeEarnings,
				openWallet,
				closeWallet,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
