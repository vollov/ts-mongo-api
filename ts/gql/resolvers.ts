import { UserInfo } from "os";
import log from "../lib/logger";
import Role from "../models/roles";
import User from "../models/users";

const findUser = async (id: string) => {
  try {
    const result = await User.findById(id).populate("roles");
    return result;
  } catch (err) {
    log.error("findUser failed, error={}", err);
  }
};

const createUser = async (u: any) => {
  try {
    log.debug("createUser u=", u.input);
    const user = new User(u.input);
    const result = await user.save();
    log.debug("createUser result={}", result);
    return user;
  } catch (err) {
    log.error("createUser failed, error={}", err);
  }
};

const updateUser = async (p: any) => {
  try {
    log.debug("updateUser p=", p);
    const result = await User.findByIdAndUpdate(p.id, p.input).populate(
      "roles"
    );
    return result;
    // return new User();
  } catch (err) {
    log.error("updateUser failed, error={}", err);
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

const addAdmin = async (r: any) => {
  try {
    const data = r.input;
    log.debug("addAdmin r=", data);
    const role = new Role({ name: data.name, reportTo: "" });
    const result = await role.save();
    log.debug("addAdmin result={}", result);
    return role;
  } catch (err) {
    log.error("addAdmin failed, error={}", err);
  }
};

const createRole = async (r: any) => {
  try {
    const data = r.input;
    const parent = await Role.findOne({ name: data.parentName });

    log.debug("createRole data=%j, parent=%j", data, parent);

    if (parent) {
      let path = "";
      if (
        typeof parent.reportTo !== "undefined" &&
        parent.reportTo.trim() !== ""
      ) {
        path = parent.reportTo + "," + data.parentName;
      } else {
        path = data.parentName;
      }

      const role = new Role({ name: data.name, reportTo: path });
      const result = await role.save();
      log.debug("createRole result={}", result);
      return role;
    } else {
      // throw exceptions
      return null;
    }
  } catch (err) {
    log.error("createRole failed, error={}", err);
  }
};

// find({$query:{path:'Electronics,'}})
const getChildren = async ({ name }: any) => {
  // const para = JSON.parse(p);
  const regex = new RegExp(name + "\\b$", "i");
  try {
    const kids = await Role.find({
      reportTo: regex
    });
    log.debug("getChildren kids=%j, parent=%j", kids, name);
    return kids;
  } catch (err) {
    return null;
  }
};

// var descendants=[]
// var item = db.categoriesMP.findOne({_id:"Cell_Phones_and_Accessories"});
// var criteria = '^'+item.path+item._id+',';
// var children = db.categoriesMP.find({path: { $regex: criteria, $options: 'i' }});
// while(true === children.hasNext()) {
//   var child = children.next();
//   descendants.push(child._id);
// }
// descendants.join(",")

const getDescendants = async ({ name }: any) => {
  try {
    const kids = await Role.find({ $query: { reportTo: name + "," } });
    log.debug("getDescendants kids=%j, parent=%j", kids, name);
    return kids;
  } catch (err) {
    return null;
  }
};

const resolvers = {
  Query: {
    info: (root: any) => `This is the API of a Hackernews Clone`,
    user: (root: any, { id }: any) => findUser(id),
    users: (root: any) => listUsers(),
    getChildren: (root: any, name: string) => getChildren(name),
    getDescendants: (root: any, name: string) => getDescendants(name)
  },
  Mutation: {
    createUser: (root: any, user: any) => createUser(user),
    updateUser: (root: any, p: any) => updateUser(p),
    addAdmin: (root: any, role: any) => addAdmin(role),
    createRole: (root: any, role: any) => createRole(role)
  },
  User: {
    roles(user: any) {
      return user.roles;
    }
  }

  // User: {
  //   address(user: any) {
  //     return user.address;
  //   }
  // }
};

export default resolvers;
