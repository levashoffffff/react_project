import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "63e33a53-2eb5-441f-b352-308d2e906db0"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data });
    }
}

/*МОЖНО СДЕЛАТЬ ТАК (ОТДЕЛЬНЫМИ ФУНКЦИЯМИ) */

/* const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'; */

//Т.е. мы вернули объект дата, а не целиком ответ от сервера
/* export const getUsers = (currentPage=1, pageSize=10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {return response.data});
} */

//Т.е. мы вернули объект дата, а не целиком ответ от сервера
export const getUsers2 = (currentPage=1, pageSize=10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
    .then(response => {return response.data});
}