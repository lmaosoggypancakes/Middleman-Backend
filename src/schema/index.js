import volunteerDef from "./volunteer.js";

const Query = `
    type Query {
        volunteers(limit: Int): [Volunteer]
    }
`;

export default [Query, volunteerDef];