const req = require.context('../src/elements', true, /\.stories\.(js|ts|tsx)$/);

export default () => {
  req.keys().forEach(filename => req(filename));
};
