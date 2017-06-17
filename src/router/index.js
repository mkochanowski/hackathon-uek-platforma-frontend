import Vue from 'vue'
import Router from 'vue-router'

import TopBar from '@/components/TopBar'

// Landing
import LandingFrame from '@/components/Landing/LandingFrame'
import LandingView from '@/components/Landing/LandingView'

// import LoginFrame from '@/components/Landing/LoginFrame'
import LoginView from '@/components/Landing/LoginView'
// import ForgottenPasswordView from '@/components/Landing/ForgottenPasswordView'
import RegisterView from '@/components/Landing/RegisterView'

// Dashboard
import DashboardFrame from '@/components/Dashboard/DashboardFrame'
import DashboardView from '@/components/Dashboard/DashboardView'
import DashboardMessagesView from '@/components/Dashboard/DashboardMessagesView'
import DashboardAnalyticsView from '@/components/Dashboard/DashboardAnalyticsView'
import DashboardEventsView from '@/components/Dashboard/DashboardEventsView'
import DashboardGroupsView from '@/components/Dashboard/DashboardGroupsView'
import DashboardTimetableView from '@/components/Dashboard/DashboardTimetableView'

import DashboardUserFrame from '@/components/Dashboard/User/DashboardUserFrame'
import DashboardUserView from '@/components/Dashboard/User/DashboardUserView'
import DashboardUserSettingsView from '@/components/Dashboard/User/DashboardUserSettingsView'

// actions
import AddEvent from '@/components/Dashboard/actions/AddEvent'
import AddSub from '@/components/Dashboard/actions/AddSub'
import MessengerAuth from '@/components/Dashboard/actions/MessengerAuth'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			components: {
				default: LandingFrame,
				navigation: TopBar
			},
			children: [
				{
					path: '',
					name: 'home',
					component: LandingView
				},
				{
					path: 'login',
					name: 'login',
					component: LoginView
					/* children: [
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
					] */
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
					path: 'timetable',
					name: 'timetable',
					component: DashboardTimetableView
				},
				{
					path: 'events',
					name: 'events',
					component: DashboardEventsView
				},
				{
					path: 'events/add',
					name: 'events.add',
					component: AddEvent
				},
				{
					path: 'subscriptions/add',
					name: 'subs.add',
					component: AddSub
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
		},
		{
			path: 'action/messenger',
			component: MessengerAuth
		}
	]
})
