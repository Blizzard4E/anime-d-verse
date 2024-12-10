export type Anime = {
    _id: string;
    title: string;
    posterUrl: string;
    coverUrl: string;
    logoUrl: string;
    genres: Genre[];
    studio: Studio;
    description: string;
    releaseDate: string;
    episodes: Episode[];
    trailerUrl: string;
    status: string;
    createdAt: string;
    updatedAt: string;
};
export type Genre = {
    _id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
};
export type Studio = {
    _id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
};
export type Episode = {
    _id: string;
    title: string;
    episodeNumber: string;
    videoUrl: string;
    duration: number;
    createdAt: string;
    updatedAt: string;
};
