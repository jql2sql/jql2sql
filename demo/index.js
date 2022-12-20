const { app } = require('./app.js');
const port = 80;

app.listen(port, () => {
  console.log(`🛡️ Server listening on port: ${port}`);
});
