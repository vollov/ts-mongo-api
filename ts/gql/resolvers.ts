import log from "../lib/logger";
import User from "../models/users";

const findUser = async (id: string) => {
  try {
    const result = await User.findById(id);
    return result;
  } catch (err) {
    log.error("findUser failed, error={}", err);
  }
};

const listUsers = async () => {
  try {
    const result = await User.find({});
    return result;
  } catch (err) {
    log.error("listUsers failed, error={}", err);
  }
};

const resolvers = {
  Query: {
    info: (root: any) => `This is the API of a Hackernews Clone`,
    user: (root: any, { id }: any) => findUser(id),
    users: (root: any) => listUsers()
  }
};

export default resolvers;
