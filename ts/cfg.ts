import fs from "fs";

export class Config {
        public logging: any;
        public app: any;
        public db: any;
        public token: any;

        private cfg: any;

        constructor() {
                this.cfg = JSON.parse(fs.readFileSync("../app.cfg.json", "utf-8"));
                this.logging = this.cfg.logging;
                this.app = this.cfg.app;
                this.db = this.cfg.db;
                this.token = this.cfg.token;
        }
}
