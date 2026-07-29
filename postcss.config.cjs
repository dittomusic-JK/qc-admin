const path = require('path');

module.exports = {
  plugins: {
    // Pin the config so the build works regardless of the process cwd
    tailwindcss: { config: path.join(__dirname, 'tailwind.config.cjs') },
    autoprefixer: {},
  },
};
