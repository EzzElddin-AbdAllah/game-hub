import { create } from "zustand";

interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder?: string;
	searchGame?: string;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setGenreId: (genreId: number | undefined) => void;
	setPlatformId: (platformId: number | undefined) => void;
	setSortOrder: (sortOrder: string) => void;
	setSearchGame: (searchGame: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {},
	setGenreId: (genreId) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
	setPlatformId: (platformId) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
	setSortOrder: (sortOrder) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
	setSearchGame: (sreachGame) =>
		set(() => ({ gameQuery: { searchGame: sreachGame } })),
}));

export default useGameQueryStore;
