import store from "../store"

export default {
    computed: {
        search: {
            get() {
                return store.state.filters.search;
            },
            set(value) {
                store.commit('SetSearch', value);
            }
        },
        available: {
            get() {
                return store.state.filters.available;
            },
            set(value) {
                store.commit('SetAvailable', value);
            }
        },
        SelectedMovies() {
            let movies = [];

            for(let film of store.getters.GetMovies) {
                if(film.available === this.available){
                    movies.push(film);
                }
            }

            return movies;
        }
    }
}