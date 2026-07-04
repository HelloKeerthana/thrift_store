import { account } from "./appwrite";

const appOrigin = process.env.REACT_APP_BASE_URL || window.location.origin;
const oauthSuccessUrl = appOrigin;
const oauthFailureUrl = `${appOrigin}/login-failed`;

export const loginWithGoogle = async () => {
  try {
    await account.createOAuth2Session(
      "google",
      oauthSuccessUrl,
      oauthFailureUrl
    );
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
    window.location.reload(); 
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

export const getUser = async () => {
  try {
    return await account.get();
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const getJWT = async () => {
  try {
    const jwt = await account.createJWT();
    return jwt;
  } catch (error) {
    console.error("JWT retrieval failed:", error);
    return null;
  }
};
