import merge from "lodash";
import Prisma from '@prisma/client';

//import volunteerResolvers from "./volunteer.js";

export const prisma = new Prisma.PrismaClient();


const getUsers = async () => {
  const allUsers = await prisma.volunteer.findMany()
  return allUsers
}


const resolvers = {
  Query: {
    volunteers: async (_, {
      limit
    }) => {
      const data = await getUsers()
      if (limit) {
        return data.slice(0, limit)
      }
      return data
    },
  },

};


export default resolvers
//export default merge(resolvers, volunteerResolvers);