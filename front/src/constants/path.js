export const API = `http://localhost:8000/api/v1`;
export const SPECIES_API = `${API}/species`;
export const ADD_FAMILY = `${SPECIES_API}/family`;
export const GET_FAMILIES = `${ADD_FAMILY}`;
export const GET_GUARD_CATEGORIES = `${SPECIES_API}/guard-categories`;
export const SPECIES_MIN = `${SPECIES_API}/min`;
export const SPECIES_EXACT = `${SPECIES_API}/exact`;

export const AUTH_API = `${API}/auth`;
export const SIGN_IN = `${AUTH_API}/sign-in`;
export const SIGN_UP = `${AUTH_API}/sign-up`;
