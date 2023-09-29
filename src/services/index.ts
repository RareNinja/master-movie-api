import axios from "axios";

export const fetchOriginalsMovies = async () => {
    const uri = `${process.env.API_BASE}/discover/tv?with_network=213&language=pt-BR&api_key=${process.env.API_KEY}`;
    const { data } = await axios.get(uri);

    return data;
};

export const fetchTrendingMovies = async () => {
    const uri = `${process.env.API_BASE}/trending/all/week?language=pt-BR&api_key=${process.env.API_KEY}`;
    const { data } = await axios.get(uri);

    return data;
};

export const fetchTopretedMovies = async () => {
    const uri = `${process.env.API_BASE}/movie/top_rated?language=pt-BR&api_key=${process.env.API_KEY}`;
    const { data } = await axios.get(uri);

    return data;
};

export const fetchActionMovies = async () => {
    const uri = `${process.env.API_BASE}/discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.API_KEY}`;
    const { data } = await axios.get(uri);

    return data;
};

export const fetchComedyMovies = async () => {
    const uri = `${process.env.API_BASE}/discover/movie?with_genres=35&language=pt-BR&api_key=${process.env.API_KEY}`;
    const { data } = await axios.get(uri);

    return data;
};

export const fetchHorrorMovies = async () => {
    const uri = `${process.env.API_BASE}/discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.API_KEY}`;
    const { data } = await axios.get(uri);

    return data;
};

export const fetchRomanceMovies = async () => {
    const uri = `${process.env.API_BASE}/discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.API_KEY}`;
    const { data } = await axios.get(uri);

    return data;
};

export const fetchDocumentaryMovies = async () => {
    const uri = `${process.env.API_BASE}/discover/movie?with_genres=99&language=pt-BR&api_key=${process.env.API_KEY}`;
    const { data } = await axios.get(uri);

    return data;
};

export const fetchMovie = async (movieId: number) => {
    const uri = `${process.env.API_BASE}/movie/${movieId}?language=pt-BR&api_key=${process.env.API_KEY}`;
    const { data } = await axios.get(uri);

    return data;
};

export const fetchTv = async (movieId: number) => {
    const uri = `${process.env.API_BASE}/tv/${movieId}?language=pt-BR&api_key=${process.env.API_KEY}`;
    const { data } = await axios.get(uri);

    return data;
};