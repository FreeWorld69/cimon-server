import { AppDebugMode } from './enviroment-types';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: AppDebugMode;
            PORT: string;

            APP_TITLE: string;
            APP_URL: string;

            MOVIE_API_URL: string;
            MOVIE_API_HEADER_USER_AGENT: string;
            MOVIE_API_HEADER_X_SOURCE: string;
            MOVIE_API_HEADER_ORIGIN: string;
            MOVIE_API_HEADER_REFERER: string;

            POSTGRES_HOST: string;
            POSTGRES_DATABASE: string;
            POSTGRES_PORT: string;
            POSTGRES_USERNAME: string;
            POSTGRES_PASSWORD: string;

            COOKIE_DOMAIN: string;
            JWT_SECRET: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
