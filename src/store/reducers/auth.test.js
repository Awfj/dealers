import reducer from "./auth";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/dealers"
    });
  });

  it("should store token upon sign in", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/dealers"
        },
        { type: "AUTH_SUCCESS", idToken: "some-token", userId: "some-user-id" }
      )
    ).toEqual({
      token: "some-token",
      userId: "some-user-id",
      error: null,
      loading: false,
      authRedirectPath: "/dealers"
    });
  });
});
