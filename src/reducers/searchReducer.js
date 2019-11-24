import { SEARCH_MOVIE, LOADING, FETCH_MOVIES, FETCH_MOVIE } from '../actions/types'


const initialState = {
    text: '',//user entering text in searchbox
    movies: [],// serach results moviesS
    loading: false,//loading
    movie: [] //when we want to get single movie
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        default: return state;
    }
}


