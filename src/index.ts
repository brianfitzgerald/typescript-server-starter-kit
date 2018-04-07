import * as express from "express";

const app = express();

export const APPLICATION_PORT = 3000;

app.listen(APPLICATION_PORT, () => {
  console.log(`Server is listening on port ${APPLICATION_PORT}`);
});
