const personFields = [
  { text: "Name", name: "name" },
  { text: "Email", type: "email", name: "email" },
  { text: "Telephone", type: "tel", name: "tel" },
  {text: "Address", name: "address"}
];
const expFields = [
  { text: "School name", name: "organization" },
  { text: "Title of study", name: "title" },
  { text: "Date of study", type: "date", name: "dateEnd" },
];

const practExpFields = [
  { text: "Company name", name: "organization" },
  { text: "Position title", name: "title" },
  { text: "Main resposibilites of your job", name: "responsibilities", type: "textarea" },
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
