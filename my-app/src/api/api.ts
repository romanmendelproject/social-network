import axios from 'axios';

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "e844109d-21f6-4dc1-b534-14f77a63cb4d"
        }
    }
)

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    followUser(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    unfollowUser(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
}


