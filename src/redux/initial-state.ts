import { SiteInfoState } from "./slices/siteInfoSlice";

const initialState: { siteInfo: SiteInfoState } = {
  siteInfo: {
    languages: {
      bytes: null,
      percentages: null,
    },
    timestamps: {
      lastSiteUpdate: null,
    },
    loading: false,
    errors: [],
  },
};

export default initialState;
