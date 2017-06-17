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

// actions
import ViewEvent from '@/components/Dashboard/actions/ViewEvent'
import AddEvent from '@/components/Dashboard/actions/AddEvent'
import AddSub from '@/components/Dashboard/actions/AddSub'

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
					path: 'events/:eventId',
					name: 'events.view',
					component: ViewEvent
				},
				{
					path: 'events/:eventId/:channelId',
					name: 'events.view.channel',
					component: ViewEvent
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
					path: 'analytics',
					name: 'analytics',
					component: DashboardAnalyticsView
				}
			]
		}
	]
})
