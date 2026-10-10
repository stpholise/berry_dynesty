import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

//  export interface Animal {
//     id: string;
//     name: string;
//     category: string;
//     breed: string;
//     price: number;
//     location: string;
//     isAvailable: boolean;
//     imageUrl?: string;
//     description:string;

//  }

import { Product as Animal } from "@/types/sanity";

export interface AnimalFilters {
  category: string | null;
  breed: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  location: string | null;
  availability: boolean | null;
  searchQuery: string;
}

export interface AnimalState {
  animals: Animal[];
  selectedAnimal: Animal | null;
  isLoading: boolean;
  error: string | null;
  filters: AnimalFilters;
}

const initialFilters: AnimalFilters = {
  category: null,
  breed: null,
  minPrice: null,
  maxPrice: null,
  location: null,
  availability: null,
  searchQuery: "",
};

const initialState: AnimalState = {
  animals: [],
  selectedAnimal: null,
  isLoading: false,
  error: null,
  filters: initialFilters,
};

export const animalSlice = createSlice({
  name: "animal",
  initialState,
  reducers: {
    setSelectedAnimal: (state, action: PayloadAction<Animal | null>) => {
      state.selectedAnimal = action.payload;
    },

    clearAnimalError: (state) => {
      state.error = null;
    },

    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.filters.searchQuery = action.payload;
    },

    updateFilters: (state, action: PayloadAction<Partial<AnimalFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },

    resetFilters: (state) => {
      state.filters = initialFilters;
    },

    // extraReducers: (builder) => {
    //   builder
    //     .addCase(fetchAnimals.pending, (state) => {
    //       state.isLoading = true;
    //       state.error = null;
    //     })
    //     .addCase(
    //       fetchAnimals.fulfilled,
    //       (state, action: PayloadAction<Animal[]>) => {
    //         state.isLoading = false;
    //         state.animals = action.payload;
    //       },
    //     )
    //     .addCase(fetchAnimals.rejected, (state, action) => {
    //       state.isLoading = false;
    //       state.error = action.payload ?? "An unexpected error occurred";
    //     });
    // },
  },
});

export const fetchAnimals = createAsyncThunk<
  Animal[],
  void,
  { rejectValue: string }
>("animal/fetchAnimals", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("/api/animals");
    if (!response.ok) {
      throw new Error("Failed to retrieve animals listing");
    }
    return (await response.json()) as Animal[];
  } catch (err: unknown) {
    if (err instanceof Error) {
      return rejectWithValue(err.message);
    }
    return rejectWithValue("An unknown error occurred while fetching animals");
  }
});

export const {
  setSelectedAnimal,
  clearAnimalError,
  setSearchQuery,
  updateFilters,
  resetFilters,
} = animalSlice.actions;

export default animalSlice.reducer;
