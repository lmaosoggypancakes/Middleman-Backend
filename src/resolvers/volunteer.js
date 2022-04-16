const volunteerResolvers = {
  Volunteer: {
    emailAddress: (parent) => {
      return parent.emailAddress;
    },
    fullName: (parent) => {
      return parent.fullName;
    },
    orgEmail: (parent) => {
      return parent.orgEmail;
    }

  }
};

export default volunteerResolvers;