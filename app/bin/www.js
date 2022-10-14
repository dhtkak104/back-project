const app = require("../app");
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(PORT + '번 포트 서버가동');
});
