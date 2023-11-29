// import { BASE_API_URL } from "../../Config/api"
// import { REGISTER, LOGIN, REQ_USER, SEARCH_USER, UPDATE_USER, LOGOUT } from "./ActionType"

// export const register = (data) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_URL}/api/auth/signup`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)

//         })
//         const resData = await res.json()
//         if (resData.jwt)
//             localStorage.setItem('token', resData.jwt)
//         dispatch({ type: REGISTER, payload: resData })
//     } catch (error) {
//         console.log('catch error', error);
//     }
// }

// export const login = (data) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_URL}/api/auth/signin`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)

//         })
//         const resData = await res.json()
//         dispatch({ type: LOGIN, payload: resData })
//     } catch (error) {
//         console.log('catch error', error)
//     }
// }

// export const currentUser = (token) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_URL}/api/users/profile`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`
//             },

//         })
//         const resData = await res.json()
//         dispatch({ type: REQ_USER, payload: resData })
//     } catch (error) {
//         console.log('catch error', error)
//     }
// }

// export const searchUser = (data) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_URL}/api/users/search?name=${data.keyword}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${data.token}`
//             },

//         })
//         const resData = await res.json()
//         dispatch({ type: SEARCH_USER, payload: resData })
//     } catch (error) {
//         console.log('catch error', error)
//     }
// }

// export const updateUser = (data) => async (dispatch) => {
//     try {
//         const res = await fetch(`${BASE_API_URL}/api/users/update/${data.id}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${data.token}`
//             },

//         })
//         const resData = await res.json()
//         dispatch({ type: UPDATE_USER, payload: resData })
//     } catch (error) {
//         console.log('catch error', error)
//     }
// }

export const logoutAction = () => async (dispatch) => {
    localStorage.removeItem('token')
}