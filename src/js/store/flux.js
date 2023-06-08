const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
				
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters() {
				fetch("https://www.swapi.tech/api/people")
				.then(res => res.json())
				.then(data => {
					setStore({
						characters: data.results
					})
				})
				.catch(error => {
					console.log(error);
				});
			},

			getPlanets() {
				fetch("https://www.swapi.tech/api/planets")
				.then(res => res.json())
				.then(data => {
					setStore({
						planets: data.results
					})
				})
				.catch(error => {
					console.log(error);
				});
			},

			getVehicles() {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(res => res.json())
				.then(data => {
					setStore({
						vehicles: data.results
					})
				})
				.catch(error => {
					console.log(error)
				})
			},

			getDetails(endpoint, id) {
				fetch(`https://www.swapi.tech/api/${endpoint}/${id}/`)
				.then(res => res.json())
				.then(data => {
					setStore({
						details: data.result
					})
				})
				.catch(error => {
					console.log(error)
				})
			},
			addToFavorites: newItem => {

				const auxStore = getStore();
				if (!auxStore.favorites.find(item => item.id == newItem.id)) {
					setStore({ favorites: [newItem, ...auxStore.favorites] });
				}

			},
			removeProductFromCart: targetProduct => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(items => items.id != targetProduct.id) });
			}
		}

	};
}

export default getState;
