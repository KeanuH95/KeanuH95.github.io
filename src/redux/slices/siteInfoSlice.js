import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    languages: {
        bytes: null,
        percentages: null
    },
    timestamps: {
        lastSiteUpdate: null,
    },
    loading: false
};

export const siteInfoSlice = createSlice({
    name: "siteInfo",
    initialState,
    reducers: {
        setSiteInfoIsLoading: (state, { payload }) => {
            state.loading = payload;
        },
        setSiteLanguagesBytes: (state, { payload }) => {
            state.languages.bytes = payload;
            state.errors = [];
            state.loading = false;
        },
        setSiteLanguagesPercentages: (state, { payload }) => {
            state.languages.percentages = payload;
            state.errors = [];
            state.loading = false;
        },
        setLastSiteUpdate: (state, { payload }) => {
            state.timestamps.lastSiteUpdate = payload;
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

export const getSiteLanguages = () => async (dispatch) => {
    try {
        dispatch(setSiteInfoIsLoading(true));
        const response = await axios.get(`${process.env.REACT_APP_GITHUB_API_REPO_URL}/languages`, { headers: { "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}` } });
        const { data } = response;
        dispatch(setSiteLanguagesBytes(data));
        dispatch(calculateLanguagePercentages(data));
        return response;
    } catch (e) {
        dispatch(setSiteInfoIsLoading(false));
        return e?.response;
    }
};

const calculateLanguagePercentages = (languageBytes) => (dispatch) => {
    var totalBytes = Object.values(languageBytes).reduce((partialSum, a) => partialSum + a, 0);
    const languagePercentages = Object.keys(languageBytes).reduce((languagePercentages, key) => {
        let bytes = languageBytes[key];
        let percentage = (bytes / totalBytes) * 100;
        let roundedPercentage = Math.round(percentage * 10) / 10;
        languagePercentages[key] = roundedPercentage;
        return languagePercentages; 
    }, {})

    dispatch(setSiteLanguagesPercentages(languagePercentages));
}

export const getLatestSiteUpdate = () => async (dispatch) => {
    try {
        dispatch(setSiteInfoIsLoading(true));
        const response = await axios.get(`${process.env.REACT_APP_GITHUB_API_REPO_URL}`, { headers: { "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}` } });
        const { data } = response;
        dispatch(setLastSiteUpdate(data?.pushed_at));
        return response;
    } catch (e) {
        dispatch(setSiteInfoIsLoading(false));
        return e?.response;
    }
};

export const selectLanguageBytes = (state) => state.siteInfo.languages.bytes;
export const selectLanguagePercentages = (state) => state.siteInfo.languages.percentages;
export const selectLastSiteUpdate = (state) => state.siteInfo.timestamps.lastSiteUpdate;

export default siteInfoSlice.reducer;
