// src/auth/index.js

// import { router } from '../router/index'
import router from '../router'
const API_PATH = 'https://uek.maciekmm.net/accounts/'

export default {

	user: {
		authenticated: false,
		role: 0
	},

	login (context, creds, redirect) {
		context.$http.post(API_PATH + 'login/', creds).then((data) => {
			localStorage.setItem('jwt_token', data.body.token)
			this.user.authenticated = true

			if (redirect) {
				router.push({ name: redirect })
			}
		},
		(data) => {
			context.error = data.err
		})
	},

	/* signup (context, creds, redirect) {
		context.$http.post(API_PATH + 'register/', creds.then((data) => {
			localStorage.setItem('jwt_token', data.body.token)
			this.user.authenticated = true

			if (redirect) {
				router.push({ name: redirect })
			}
		},
		(data) => {
			context.error = data.err
		})
	}, */

	logout () {
		localStorage.removeItem('jwt_token')
		this.user.authenticated = false
	},

	ifAdmin () {
		var jwt = localStorage.getItem('jwt_token')
		var decode = jwt_decode(jwt)
		var user = decode.User
		
		console.log(decode)

		if (user.role == 1) {
			return true
		} else return false
	},

	role () {
		var jwt = localStorage.getItem('jwt_token')
		var decode = jwt_decode(jwt)
		var user = decode.User
		return user.role;
	},
	
	checkAuth () {
		var jwt = localStorage.getItem('jwt_token')
		if (jwt) {
			this.user.authenticated = true
		} else {
			this.user.authenticated = false
		}
	},

	getAuthHeader () {
		return {
			'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
		}
	}
}
