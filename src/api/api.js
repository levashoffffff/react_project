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
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
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
export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => { return response.data });
}