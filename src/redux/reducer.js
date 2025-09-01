
const initialStata = {
    loading: false,
    data: null,
    allData: null,
    error: null,
    detail: null,
}


export const fetchReducer = (state=initialStata, action) => {
    switch(action.type){
        case "FETCH_START":
            return {...state, loading: true, error: null};
        case "FETCH_SUCCESS":
            const payload = action.payload;
            if(Array.isArray(payload)){
                return {...state, loading: false, allData: action.payload};
            }else{
                return {...state, loading: false, detail: payload};
            }
        case "FETCH_FAILURE":
            return {...state, loading: false, error: action.payload};
        case "FILTER_DATA":
            return {
                ...state,
                allData: state.allData.filter((item) =>
                    item.title?.toLowerCase().includes(action.payload.toLowerCase())
                ),
            };
        default:
            return state;
    }
}
