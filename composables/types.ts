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
export interface Author {
    id: number;
    username: string;
    email: string;
}

export interface News {
    id: number;
    title: string;
    content: string;
    cover_image: string;
    author: Author;
    created_at: string;
    updated_at: string;
    likes_count: number;
    comments: any[];
    is_liked: boolean;
}
export interface Thread {
    id: number;
    title: string;
    author_id: number;
    anime_id: number;
    created_at: string;
    username: string;
    profile_url: string;
    user_created_at: string;
    num_posts: number;
}
export interface Post {
    id: number;
    content: string;
    author_id: number;
    created_at: string;
    thread_id: number;
    username: string;
    profile_url: string;
}
export type UserState = {
    id: number;
    username: string;
    profile_url: string;
} | null;
export type SessionResponse = {
    session_token: string;
} | null;
export type ContentResponse<T> = {
    success: boolean;
    message: string;
    data: T;
};
