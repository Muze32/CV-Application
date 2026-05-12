const personFields = [
  { text: "Name", name: "name", placeholder: "John Doe" },
  {
    text: "Email",
    type: "email",
    name: "email",
    placeholder: "example@gmail.com",
  },
  {
    text: "Telephone",
    type: "tel",
    name: "tel",
    placeholder: "+44 222 333 4444",
  },
  {
    text: "Address",
    name: "address",
    placeholder: "456 Maple Avenue, Apt. 2B",
  },
];
const expFields = [
  {
    text: "School name",
    name: "organization",
    placeholder: "London University",
  },
  { text: "Title of study", name: "title", placeholder: "Electronic engineer" },
  { text: "Date of study", type: "date", name: "dateEnd" },
];

const practExpFields = [
  { text: "Company name", name: "organization", placeholder: "Google" },
  { text: "Position title", name: "title", placeholder: "Content Manager" },
  {
    text: "Main resposibilites of your job",
    name: "responsibilities",
    type: "textarea",
    placeholder: "Describe your main responsibilities and achievements...",
  },
  {
    text: "Date you started working for the company",
    name: "dateStart",
    type: "date",
  },
  {
    text: "Date you stopped working for the company",
    name: "dateEnd",
    type: "date",
  },
];

const initialPerson = {
  name: "",
  email: "",
  tel: "",
  address: "",
};

const initialExp = {
  organization: "",
  title: "",
  dateEnd: "",
};

const initialPractExp = {
  organization: "",
  title: "",
  responsibilities: "",
  dateStart: "",
  dateEnd: "",
};

export {
  personFields,
  expFields,
  initialPerson,
  initialExp,
  practExpFields,
  initialPractExp,
};
