import axios from 'axios';

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "c6f65e85-f03d-4b4b-b643-ba0cc6da1391"
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
        return profileAPI.getProfile(userId)
    },

}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`/auth/login`, { email, password, rememberMe})
            .then(response => {
                return response.data;
            })
    },
    logout() {
        return instance.delete(`/auth/login`)
        .then(response => {
            return response.data;
        })
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    updateStatus(status: string) {
        return instance.put('profile/status', { status: status })
            .then(response => {
                return response.data;
            })
    },
}
