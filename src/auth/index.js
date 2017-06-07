// src/auth/index.js

// import { router } from '../router/index'
import router from '../router'
const API_PATH = 'https://uek.maciekmm.net/accounts/'

export default {

	user: {
		authenticated: false,
		admin: false
	},

	login (context, creds, redirect) {
		context.$http.post(API_PATH + 'login/', creds).then((data) => {
			localStorage.setItem('jwt_token', data.body.token)
			console.log(data.body.token)
			console.log('token:')
			console.log(localStorage.getItem('jwt_token'))
			this.user.authenticated = true

			if (redirect) {
				router.go(redirect)
			}
		},
		(data) => {
			context.error = data.err
		})
	},

	signup (context, creds, redirect) {
		context.$http.post(API_PATH + 'register', creds, (data) => {
			localStorage.setItem('jwt_token', data.body.token)
			this.user.authenticated = true

			if (redirect) {
				router.go(redirect)
			}
		}).error((err) => {
			context.error = err
		})
	},

	logout () {
		localStorage.removeItem('jwt_token')
		this.user.authenticated = false
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
