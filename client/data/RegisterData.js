const baseFields = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter a secure password",
  },
  {
    name: "cPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm password",
  },
  {
    name: "role",
    label: "Role",
    type: "select",
    options: ["student", "teacher"],
  },
];

// Extra fields for student
const studentFields = [
  {
    name: "grade",
    label: "Grade / Level",
    type: "select",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
    ],
  },
  {
    name: "school",
    label: "School / University",
    type: "text",
    placeholder: "Enter your school or university name",
  },
];

// Extra fields for teacher
const teacherFields = [
  {
    name: "subject",
    label: "Subject Expertise",
    type: "select",
    options: [
      "Mathematics",
      "Science",
      "Combined Science",
      "English Language",
      "Sinhala",
      "Tamil",
      "History",
      "Geography",
      "Citizenship Education",
      "Religion & Ethics",
      "Physics",
      "Chemistry",
      "Biology",
      "Commerce",
      "Accounting",
      "Business Studies",
      "Economics",
      "Political Science",
      "Information Technology (IT)",
      "Information and Communication Technology (ICT)",
      "Agriculture",
      "Buddhism",
      "Hinduism",
      "Christianity",
      "Islam",
      "Art",
      "Music",
      "Drama",
      "Home Science",
      "Design & Technology",
      "Health & Physical Education",
      "French",
      "German",
      "Japanese",
      "Chinese",
      "Technical Drawing",
      "Environmental Science",
    ],
  },

  {
    name: "school",
    label: "School / University",
    type: "text",
    placeholder: "Enter your school or university name",
  },
];

//  extra field
const phoneField = {
  name: "phone",
  label: "Phone Number",
  type: "tel",
  placeholder: "Enter your phone number",
};

export { baseFields, studentFields, teacherFields, phoneField };
