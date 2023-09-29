export type dataMovie = {  
    data:{
        adult:  boolean,
        backdrop_path: string,
        id: number,
        title: string,
        original_language: string,
        original_title: string,
        overview: string,
        poster_path: string,
        media_type:string,
        genre_ids: [],
        popularity: number,
        release_date: Date,
        video: boolean,
        vote_average: number,
        vote_count: number
    }
};

export type errorType = {
    message?: string
}