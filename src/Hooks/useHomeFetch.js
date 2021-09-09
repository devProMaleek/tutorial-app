// Import necessary libraries
import {useEffect, useState, useRef} from "react";
// API
import API from "../API";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}


export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    const fetchMovies = async (page, searchTerm = "") => {
        try {
            // Update the error and loading state.
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            // Update the state.
            setState(prevState => ({
                ...movies,
                results:
                    page > 1 ? [...prevState.results, ...movies.results] : [...movies.results]
            }));
            // Error handling
        } catch (error) {
            setError(true)
        }
        // Update the loading state.
        setLoading(false);
    };

    // Initial and search render
    useEffect(() => {
        setState(initialState);
            fetchMovies(1, searchTerm)},
        [searchTerm])

    // Load More
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page])
    return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore }
}