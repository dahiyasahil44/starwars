export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const FILTER_DATA = "FILTER_DATA";

export const fetchData = (url) => {
    return async (dispatch) => {
        dispatch({type: FETCH_START});
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({type: FETCH_SUCCESS, payload: data});
        } catch (error) {
            dispatch({type: FETCH_FAILURE, payload: error.message});
        }
}
};

export const filterData = (query) => ({
    type: FILTER_DATA,
    payload: query,
});