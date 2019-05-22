"use strict";

import bunyan from "bunyan";
import { Config } from "../cfg";

const cfg = new Config();

const log = bunyan.createLogger(cfg.logging);

export default log;
