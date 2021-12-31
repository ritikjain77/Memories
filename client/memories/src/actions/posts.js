import * as api from '../api';

//action Creators

export const getPosts = () => async(Dispatch) => {
    try{
        const {data} = await api.fetchposts();

        Dispatch({type: 'FETCH_ALL',payload:data});
    }catch(error){
        console.log(error.message);
    }
}