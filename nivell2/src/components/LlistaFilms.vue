<template>
    <div class="container mt-2 pb-2 d-flex flex-wrap justify-content-between align-content-start" id="llista">
        <div class="card mt-2" v-for="SelectedMovie of $store.getters.GetMovies" :key="SelectedMovie.id">
            <div class="card-header">
                <h5>{{SelectedMovie.title}}</h5>
                <span>Available: {{SelectedMovie.available}}</span>
            </div>
            <div class="card-body">{{SelectedMovie.description}}</div>
        </div>
    </div>
</template>

<script src="./../scripts/LlistaFilms.js"></script>

<style src="./../styles/LlistaFilms.css" scoped></style>