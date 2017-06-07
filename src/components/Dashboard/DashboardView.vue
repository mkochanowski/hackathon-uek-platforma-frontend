<template>
	<div>
		<div class="content-title">Panel główny</div>
		<div class="row">
			<div class="col-md-8">
				<div class="card">
					<div class="card-title">Ostatnie komunikaty</div>
					<div class="card-content">
						<table>
							<tr class="header">
								<td>#</td>
								<td>Tytuł komunikatu</td>
								<td>Platforma</td>
							</tr>
							<tr v-for="item in messages">
								<td>{{ item.id }}</td>
								<td>{{ item.title }}</td>
								<td><div v-for="platform in item.platforms">{{ platform }}</div></td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="card">
					<div class="card-content">
						<div class="text-center avatar">
							<img :src="avatar_pic" alt="Avatar image"/><br/>
							<div class="card-title" style="margin-top: 1em;">{{ name }}</div>
							<table style="margin: 0 auto; margin-top: 1em;">
								<tr>
									<td class="header">Wydział:</td><td>{{ department }}</td>
								</tr>
								<tr>
									<td class="header">Rok:</td><td>{{ year }}</td>
								</tr>
								<tr>
									<td class="header">Rola:</td><td>{{ role }}</td>
								</tr>
							</table>
							<hr/>
							<router-link :to="{ name: 'home' }" class="link">Wyloguj</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: "Aneta Kowalska",
				avatar_pic: "../../static/avatar-teacher.png",
				department: "Testowy",
				year: "pierwszy",
				role: "Student",

				messages: [{
					id: 1,
					title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate risus non orci commodo, nec dignissim purus mollis. Vivamus et purus eros. ',
					platforms: ['Messenger', 'Mail', 'SMS']
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.avatar {
		margin: 2em;
	}
</style>
