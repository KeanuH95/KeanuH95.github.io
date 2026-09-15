/**
 * Characterization tests for the siteInfo thunks:
 *  - BR-01: language percentages = (bytes/total)*100 rounded to 1 decimal.
 *  - BR-05: a fetch failure ends loading but records NO error (silent "no data"
 *    fallback) — confirmed-intended behavior per the brief (Q2), pinned here.
 */
import axios from "axios";
import reducer, {
  getSiteLanguages,
  getLatestSiteUpdate,
  setSiteInfoIsLoading,
  setSiteLanguagesBytes,
  setSiteLanguagesPercentages,
  type SiteInfoState,
} from "./siteInfoSlice";

vi.mock("axios");
const mockedGet = vi.mocked(axios.get);

// A dispatch that also executes thunk functions (so nested thunks run).
const makeDispatch = () => {
  const dispatch: any = vi.fn((action: any) =>
    typeof action === "function" ? action(dispatch) : action
  );
  return dispatch;
};

beforeEach(() => vi.clearAllMocks());

describe("BR-01: language percentage calculation", () => {
  it("computes (bytes/total)*100 rounded to one decimal", async () => {
    mockedGet.mockResolvedValue({ data: { TypeScript: 60000, SCSS: 40000 } });
    const dispatch = makeDispatch();
    await getSiteLanguages()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(
      setSiteLanguagesBytes({ TypeScript: 60000, SCSS: 40000 })
    );
    expect(dispatch).toHaveBeenCalledWith(
      setSiteLanguagesPercentages({ TypeScript: 60, SCSS: 40 })
    );
  });
});

describe("BR-05: fetch failure is silent (loading ends, no error stored)", () => {
  it("getSiteLanguages: turns loading off and dispatches no error action", async () => {
    mockedGet.mockRejectedValue({ response: { status: 500 } });
    const dispatch = makeDispatch();
    await getSiteLanguages()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setSiteInfoIsLoading(true));
    expect(dispatch).toHaveBeenCalledWith(setSiteInfoIsLoading(false));
    // no bytes/percentages stored on failure
    expect(dispatch).not.toHaveBeenCalledWith(
      expect.objectContaining({ type: setSiteLanguagesBytes.type })
    );
  });

  it("getLatestSiteUpdate: turns loading off on failure", async () => {
    mockedGet.mockRejectedValue({ response: { status: 500 } });
    const dispatch = makeDispatch();
    await getLatestSiteUpdate()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setSiteInfoIsLoading(false));
  });

  it("reducer keeps errors[] empty — nothing ever writes to it", () => {
    const start: SiteInfoState = {
      languages: { bytes: null, percentages: null },
      timestamps: { lastSiteUpdate: null },
      loading: true,
      errors: [],
    };
    const next = reducer(start, setSiteInfoIsLoading(false));
    expect(next.errors).toEqual([]);
  });
});
