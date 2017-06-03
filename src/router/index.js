import Vue from 'vue'
import Router from 'vue-router'

// Landing
import LandingFrame from '@/components/Landing/LandingFrame'
import LandingView from '@/components/Landing/LandingView'

import LoginFrame from '@/components/Landing/LoginFrame'
import LoginView from '@/components/Landing/LoginView'
import ForgottenPasswordView from '@/components/Landing/ForgottenPasswordView'

import RegisterView from '@/components/Landing/RegisterView'

// Dashboard
import DashboardFrame from '@/components/Dashboard/DashboardFrame'
import DashboardView from '@/components/Dashboard/DashboardView'
import DashboardMessagesView from '@/components/Dashboard/DashboardMessagesView'
import DashboardAnalyticsView from '@/components/Dashboard/DashboardAnalyticsView'
import DashboardEventsView from '@/components/Dashboard/DashboardEventsView'
import DashboardGroupsView from '@/components/Dashboard/DashboardGroupsView'
import DashboardScheduleView from '@/components/Dashboard/DashboardScheduleView'

import DashboardUserFrame from '@/components/Dashboard/User/DashboardUserFrame'
import DashboardUserView from '@/components/Dashboard/User/DashboardUserView'
import DashboardUserSettingsView from '@/components/Dashboard/User/DashboardUserSettingsView'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: LandingFrame,
			children: [
				{
					path: '',
					name: 'home',
					component: LandingView
				},
				{
					path: 'login',
					component: LoginFrame,
					children: [
						{
							path: '',
							name: 'login',
							component: LoginView
						},
						{
							path: 'forgotten', // optional
							name: 'forgotten',
							component: ForgottenPasswordView
						}
					]
				},
				{
					path: '/register',
					name: 'register',
					component: RegisterView
				}
			]
		},
		{
			path: '/dashboard',
			component: DashboardFrame,
			children: [
				{
					path: '',
					name: 'dashboard',
					component: DashboardView
				},
				{
					path: 'schedule',
					name: 'schedule',
					component: DashboardScheduleView
				},
				{
					path: 'events',
					name: 'events',
					component: DashboardEventsView
				},
				{
					path: 'groups',
					name: 'groups',
					component: DashboardGroupsView
				},
				{
					path: 'messages',
					name: 'messages',
					component: DashboardMessagesView
				},
				{
					path: 'analytics', // optional
					name: 'analytics',
					component: DashboardAnalyticsView
				},
				{
					path: 'user',
					component: DashboardUserFrame,
					children: [
						{
							path: '',
							name: 'user',
							component: DashboardUserView
						},
						{
							path: 'settings',
							name: 'user-settings',
							component: DashboardUserSettingsView
						}
					]
				}
			]
		}
	]
})
