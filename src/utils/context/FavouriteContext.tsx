import React, { createContext, useContext, useState, useEffect } from 'react';
import type {
  UnsplashPhoto,
  FavouritesContextType,
  FavouritesProviderProps,
} from 'types/types';

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider: React.FC<FavouritesProviderProps> = ({ children }) => {
  const [favourites, setFavourites] = useState<UnsplashPhoto[]>([]);

  useEffect(() => {
    const favFromStorage = localStorage.getItem('favourites');
    if (favFromStorage) {
      setFavourites(JSON.parse(favFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (photo: UnsplashPhoto) => {
    setFavourites(prev =>
      prev.find(item => item.id === photo.id)
        ? prev.filter(item => item.id !== photo.id)
        : [...prev, photo],
    );
  };

  const isFavourite = (id: string) => favourites.some(item => item.id === id);

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite, isFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
};
