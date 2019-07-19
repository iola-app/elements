const req = require.context('../src/elements', true, /\.stories\.js$/);

export default () => {
  req.keys().forEach(filename => req(filename));
};
