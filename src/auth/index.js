// src/auth/index.js

// import { router } from '../router/index'
import router from '../router'
const API_PATH = 'https://uek.maciekmm.net/accounts/'

export default {

	user: {
		authenticated: false
	},

	/* login (context, creds, redirect) {
		context.$http.post(API_PATH + 'login', creds, (data) => {
			localStorage.setItem('id_token', data.id_token)
			localStorage.setItem('access_token', data.access_token)

			this.user.authenticated = true

			if (redirect) {
				router.go(redirect)
			}
		}).error((err) => {
			context.error = err
		})
	}, */

	login (context, creds, redirect) {
		console.log(JSON.stringify(creds))
		context.$http.post(API_PATH + 'login/', creds, { emulateJSON: true }).then((data) => {
			localStorage.setItem('id_token', data.id_token)
			localStorage.setItem('access_token', data.access_token)

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
			localStorage.setItem('id_token', data.id_token)
			localStorage.setItem('access_token', data.access_token)

			this.user.authenticated = true

			if (redirect) {
				router.go(redirect)
			}
		}).error((err) => {
			context.error = err
		})
	},

	logout () {
		localStorage.removeItem('id_token')
		localStorage.removeItem('access_token')
		this.user.authenticated = false
	},

	checkAuth () {
		var jwt = localStorage.getItem('id_token')
		if (jwt) {
			this.user.authenticated = true
		} else {
			this.user.authenticated = false
		}
	},

	getAuthHeader () {
		return {
			'Authorization': 'Bearer ' + localStorage.getItem('access_token')
		}
	}
}
