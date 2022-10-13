const app = require("../app");

app.listen(process.env.PORT || 8081, () => {
  console.log('서버가동');
});