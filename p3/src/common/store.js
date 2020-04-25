import Vue from 'vue'
import Vuex from 'vuex'
import * as app from '@/common/app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
		posters: [],
		poster: [],
		edit: false
    },
	
	mutations: {
		
		setEditMode(state, edit) {
			state.edit = edit;
		},
		
		loadPosters(state, posters) {
			state.posters = posters;
		},
		
		loadPoster(state, poster) {
			state.poster = poster;
		}
	},
	
	actions: {
		
		// Asynchronous call to get all posters
		getPosters(context) {
			context.commit('setEditMode', false);
			app.callApi.get(app.config.apiRoute + 'posters', app.apiConfig)
			.then(response => { 
				context.commit('loadPosters', response.data);
			});
		},
		
		// Asynchronous call to get a specific poster
		getPoster(context, id) {
			if (id) {
				// If there are no posters in the store then make an api call to get the specific poster
				if (this.state.posters.length <= 0) {
					app.callApi.get(app.config.apiRoute + 'posters/' + id, app.apiConfig)
					.then(response => { 
						context.commit('loadPoster', response.data);
					});
				} else {
					// If there are posters in the store then use the getter to get the poster
					let poster = this.getters.getPosterById(id);
					context.commit('loadPoster', poster);
				}			
			}
		}
		
	},
	
	getters: {
		
		// Gets Poster By Id 
		getPosterById(state) {
			return (id) => {
				for (let key of Object.keys(state.posters)) {
					if (state.posters[key].id == id) {
						return state.posters[key];
					} 
				}	
			}
		}
		
	}
})