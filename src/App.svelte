<ion-app>
	<ion-tabs>
		<ion-tab tab="map">
			<h1 class="ma">Map Content</h1>
		</ion-tab>
		<ion-tab tab="log">
			<h1 class="ma">Log Content</h1>
		</ion-tab>
		<ion-tab tab="settings">
			<h1 class="ma">Settings Content</h1>
		</ion-tab>

		<ion-tab-bar slot="bottom">
			<ion-tab-button tab="map">
				<ion-label>Map</ion-label>
				<ion-icon name="bicycle-outline" />
			</ion-tab-button>
			<ion-tab-button tab="log">
				<ion-label>Log</ion-label>
				<ion-icon name="analytics-outline" />
			</ion-tab-button>
			<ion-tab-button tab="settings">
				<ion-label>Settings</ion-label>
				<ion-icon name="settings-outline" />
			</ion-tab-button>
		</ion-tab-bar>
	</ion-tabs>
</ion-app>
