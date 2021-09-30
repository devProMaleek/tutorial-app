// Import the necessary library
import { useState, useEffect, useCallback } from 'react';
import API from '../API';
import { isPersistedState } from "../helpers";

// Export useMovieFetch Hook.
export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // useCallback
    const fetchMovie = useCallback(async () => {
        try{
            setLoading(true);
            setError(false);

            // Fetch movie and movie credit
            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);

            // Get the director
            const directors = credits.crew.filter( member => member.job === 'Director');

            // Update the state.
            setState({ ...movie, actors: credits.cast, directors});

            // Update Loading State.
            setLoading(false);
        }

            // Error Handling
        catch (error) {
            setError(true);
        }
    }, [movieId]);

    // useEffect
    useEffect(() => {

        // Create a session storage for each movie.
        const sessionState = isPersistedState(movieId);

        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }
        fetchMovie();
    }, [movieId])

    // Write to session storage.
    useEffect( () => {
        sessionStorage.setItem(movieId, JSON.stringify(state));

    }, [movieId, state])
    return { state, loading, error };
}