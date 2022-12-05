import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";
let api = "http://hn.algolia.com/api/v1/search?";
const initialState = {
    isLoading: true,
    query: "css",
    nbPages: 0,
    page: 0,
    hits: []
}
const AppContext = React.createContext();

//create provider function

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const response = fetch(url);
            const data = await (await response).json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                    page: data.page
                }
            });
            //isLoading(false);
        }
        catch (error) {
            // console.log(error);
        }

    }

    useEffect(() => {
        fetchApiData(`${api}query=${state.query}&page=${state.page}`);
    }, []);
    return (
        <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
    )
}

//create custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }
