import Redis from "ioredis";
import log from "./logger";
const redis = new Redis();

// register user authentication after login
const register = (key: Redis.KeyType, value: string) => {
  try {
    return redis.set(key, value);
  } catch (error) {
    log.error(error);
  }
};

const lookup = (key: Redis.KeyType) => {
  try {
    return redis.get(key);
  } catch (error) {
    log.error(error);
  }
};

const authenticate = (key: Redis.KeyType) => {
  try {
    return redis.exists(key);
  } catch (error) {
    log.error(error);
  }
};

const expire = (key: Redis.KeyType, seconds: number) => {
  return redis.expire(key, seconds);
};

const disconnect = () => {
  redis.disconnect();
};
export { register, lookup, authenticate, disconnect, expire };
