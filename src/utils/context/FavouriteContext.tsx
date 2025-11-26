import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { UnsplashPhoto } from 'types/types';

import { StorageService } from '../StorageService';

export interface FavouritesProviderProps {
  children: ReactNode;
}

export type FavouritesContextType = {
  favourites: UnsplashPhoto[];
  toggleFavourite: (photo: UnsplashPhoto) => void;
  isFavourite: (id: string) => boolean;
};

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);
const favouritesStorage = new StorageService<UnsplashPhoto[]>('favourites');

export const FavouritesProvider: React.FC<FavouritesProviderProps> = ({ children }) => {
  const [favourites, setFavourites] = useState<UnsplashPhoto[]>(() => {
    return favouritesStorage.get() || [];
  });

  useEffect(() => {
    favouritesStorage.set(favourites);
  }, [favourites]);

  const toggleFavourite = useCallback((photo: UnsplashPhoto) => {
    setFavourites(prev =>
      prev.find(item => item.id === photo.id)
        ? prev.filter(item => item.id !== photo.id)
        : [...prev, photo],
    );
  }, []);

  const isFavourite = useCallback(
    (id: string): boolean => {
      return favourites.some(item => item.id === id);
    },
    [favourites],
  );

  const value = useMemo(
    () => ({ favourites, toggleFavourite, isFavourite }),
    [favourites, toggleFavourite, isFavourite],
  );

  return (
    <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
  );
};

export const useFavourites = (): FavouritesContextType => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
};
