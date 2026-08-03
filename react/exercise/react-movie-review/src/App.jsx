import { useState, useEffectm, useMemo } from "react";
import ControlBar from "./component/ControlBar";
import AddMovieForm from "./component/AddMovieForm";
import MovieCard from "./component/MovieCard";
import { loadData, saveData } from "./lib/storage";
import { applyFiltersAndSort } from "./lib/selector";
import "./App.css";

function App() {
    // Data state - initialize with loadData() using lazy initializer
    const [data, setData] = useState(() => loadData());
    console.log(data);

    // UI state
    const [sortKey, setSortKey] = useState("createdAtDesc");
    const [filterWatched, setFilterWatched] = useState("all");
    const [filterMinRating, setFilterMinRating] = useState(0);
    const [importDialogOpen, setImportDialogOpen] = useState(false);

    // Save data whenever it changes
    useEffect(() => {
        saveData(data);
    }, [data]);

    // Derived list: apply filters and sorting
    const displayedMovies = useMemo(() => {
        return applyFiltersAndSort(data.items, {
            sortKey,
            filterWatched,
            filterMinRating,
        });
    }, [data.items, sortKey, filterWatched, filterMinRating]);

    // Add movie handler
    const handleAddMovie = (movie) => {
        const now = Date.now();
        const newMovie = {
            id: data.nextId,
            ...movie,
            createdAt: now,
            updatedAt: now,
        };

        setData({
            ...data,
            nextId: data.nextId + 1,
            items: [...data.items, newMovie],
        });
    };

    // Update movie handler
    const handleUpdateMovie = (updatedMovie) => {
        setData({
            ...data,
            items: data.items.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie)),
        });
    };

    // Export handler
    const handleExport = () => {
        const jsonData = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "mr-export.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    // Import handler
    const handleImport = (importedData) => {
        setData(importedData);
    };
    return (
        <div className="container">
            <h1>Movie Watchlist</h1>
            <ControlBar />
            <AddMovieForm />
            <h4 className="my-3">Movies</h4>
            <MovieCard />
        </div>
    );
}

export default App;
