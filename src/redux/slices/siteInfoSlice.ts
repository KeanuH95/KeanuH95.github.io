import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface LanguageState {
    bytes: Record<string, number> | null;
    percentages: Record<string, number> | null;
}

interface TimestampState {
    lastSiteUpdate: string | null;
}

export type SiteInfoState = {
    languages: LanguageState;
    timestamps: TimestampState;
    loading: boolean;
    errors: string[];
}

const initialState: SiteInfoState = {
    languages: {
        bytes: null,
        percentages: null
    },
    timestamps: {
        lastSiteUpdate: null,
    },
    loading: false,
    errors: []
};

export const siteInfoSlice = createSlice({
    name: "siteInfo",
    initialState,
    reducers: {
        setSiteInfoIsLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setSiteLanguagesBytes: (state, action: PayloadAction<Record<string, number>>) => {
            state.languages.bytes = action.payload;
            state.errors = [];
            state.loading = false;
        },
        setSiteLanguagesPercentages: (state, action: PayloadAction<Record<string, number>>) => {
            state.languages.percentages = action.payload;
            state.errors = [];
            state.loading = false;
        },
        setLastSiteUpdate: (state, action: PayloadAction<string>) => {
            state.timestamps.lastSiteUpdate = action.payload;
            state.errors = [];
            state.loading = false;
        },
    },
});

export const {
    setSiteInfoIsLoading,
    setSiteLanguagesBytes,
    setSiteLanguagesPercentages,
    setLastSiteUpdate
} = siteInfoSlice.actions;

export const getSiteLanguages = () => async (dispatch: any) => {
    try {
        dispatch(setSiteInfoIsLoading(true));
        const response = await axios.get(`${process.env.REACT_APP_GITHUB_API_REPO_URL}/languages`);
        const { data } = response;
        dispatch(setSiteLanguagesBytes(data));
        dispatch(calculateLanguagePercentages(data));
        return response;
    } catch (e: any) {
        dispatch(setSiteInfoIsLoading(false));
        return e?.response;
    }
};

const calculateLanguagePercentages = (languageBytes: Record<string, number>) => (dispatch: any) => {
    const totalBytes = Object.values(languageBytes).reduce((partialSum, a) => partialSum + a, 0);
    const languagePercentages = Object.keys(languageBytes).reduce((languagePercentages, key) => {
        const bytes = languageBytes[key];
        const percentage = (bytes / totalBytes) * 100;
        const roundedPercentage = Math.round(percentage * 10) / 10;
        languagePercentages[key] = roundedPercentage;
        return languagePercentages; 
    }, {} as Record<string, number>);

    dispatch(setSiteLanguagesPercentages(languagePercentages));
}

export const getLatestSiteUpdate = () => async (dispatch: any) => {
    try {
        dispatch(setSiteInfoIsLoading(true));
        const response = await axios.get(`${process.env.REACT_APP_GITHUB_API_REPO_URL}`);
        const { data } = response;
        dispatch(setLastSiteUpdate(data?.pushed_at));
        return response;
    } catch (e: any) {
        dispatch(setSiteInfoIsLoading(false));
        return e?.response;
    }
};

export const selectLanguageBytes = (state: { siteInfo: SiteInfoState }) => state.siteInfo.languages.bytes;
export const selectLanguagePercentages = (state: { siteInfo: SiteInfoState }) => state.siteInfo.languages.percentages;
export const selectLastSiteUpdate = (state: { siteInfo: SiteInfoState }) => state.siteInfo.timestamps.lastSiteUpdate;

export default siteInfoSlice.reducer;
