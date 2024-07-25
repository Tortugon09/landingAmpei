import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [openInfo, setOpenInfo] = useState(false)
	return (
		<Context.Provider value={{
			openInfo,
			setOpenInfo
		}}>
			{children}
		</Context.Provider>
	)

}