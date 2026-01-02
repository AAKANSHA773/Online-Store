module.exports = {
  Link: ({ children }) => children,
  useNavigate: () => jest.fn(),
  useParams: () => ({}),
  createBrowserRouter: jest.fn(),
  RouterProvider: ({ children }) => children,
};
