import { useState } from 'react';

const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);

    const handleToggleFavorite = (id, isFavorite) =>
        isFavorite
            ? setFavorites(favorites.filter(x => x !== id))
            : setFavorites(favorites.concat(id));

    return [favorites, handleToggleFavorite];
};

export default useFavorites;
