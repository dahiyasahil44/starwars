
const initialStata = {
    loading: false,
    data: null,
    allData: null,
    error: null
}


export const fetchReducer = (state=initialStata, action) => {
    switch(action.type){
        case "FETCH_START":
            return {...state, loading: true, error: null};
        case "FETCH_SUCCESS":
            return {...state, loading: false, data: action.payload, allData: action.payload};
        case "FETCH_FAILURE":
            return {...state, loading: false, error: action.payload};
        case "FILTER_DATA":
            return {
                ...state,
                data: state.allData.filter((item) =>
                    item.title?.toLowerCase().includes(action.payload.toLowerCase())
                ),
            };
        default:
            return state;
    }
}
