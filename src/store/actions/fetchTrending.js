import axios from "axios";
import { BASE_URL, API_KEY } from "../../config";
import { DELETE_TRENDING, FETCH_TRENDING } from ".";

//액션 생성 함수
//axios 통해 영화 데이터를 파라미터로 받아, 액션 객체로 반환
export const fetchTrendData = (data) => {
    return {
        type: FETCH_TRENDING,
        data,
    };
};

export const deleteTrendData = (id) => {
    return {
        type: DELETE_TRENDING,
        id,
    };
};

export const fetchTrending = (dispatch) => {
    axios
    .get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response) => dispatch(fetchTrendData(response.data)))
    .catch(error => console.log(error));
};

export const deleteTrending = (dispatch, id) => {
    dispatch(deleteTrendData(id));
}