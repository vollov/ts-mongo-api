import app from "./app";
import log from "./lib/logger";
const PORT = 5000;

app.listen(PORT, () => {
  log.debug(`server started at http://localhost:${PORT}`);
});
