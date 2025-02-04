// Episode type definition
export interface Episode {
    _id: string;
    title: string;
    episodeNumber: string;
    thumbnailUrl: string;
    videoUrl: string;
    animeId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

// Genre type definition
export interface Genre {
    _id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

// Studio type definition
export interface Studio {
    _id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

// Anime type definition
export interface Anime {
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
    __v: number;
}
