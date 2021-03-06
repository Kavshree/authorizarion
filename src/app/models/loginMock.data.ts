import { AppUserAuth } from "./AppUserAuth.model";

export const LOGIN_MOCKS: AppUserAuth[] = [
    {
        userName: "PSheriff",
        bearerToken: "abi393kdkd9393ikd",
        isAuthenticated: true,
        canAccessProducts: true,
        canAddProduct: true,
        canSaveProduct: true,
        canAccessCategories: true,
        canAddCategory: false
    },
    {
        userName: "BJones",
        bearerToken: "sd9f923k3kdmcjkhd",
        isAuthenticated: true,
        canAccessProducts: false,
        canAddProduct: false,
        canSaveProduct: false,
        canAccessCategories: true,
        canAddCategory: true
    },
    {
        userName: "Chana",
        bearerToken: "sd9f924843kdmcjkhd",
        isAuthenticated: true,
        canAccessProducts: true,
        canAddProduct: false,
        canSaveProduct: false,
        canAccessCategories: true,
        canAddCategory: true
    }
];