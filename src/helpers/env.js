const BACKEND_URI =
  process.env.NODE_ENV === "development"
    ? `http://localhost:3001`
    : process.env.REACT_APP_BACKEND_URI;

export { BACKEND_URI };
