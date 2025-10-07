export const baseFields = [
  {
    name: "userType",
    label: "Select Role",
    type: "select",
    required: true,
    options: [
      { value: "student", label: "Student" },
      { value: "teacher", label: "Teacher" },
    ],
  },
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Create a password (min. 6 characters)",
    required: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    required: true,
  },
];

export const studentFields = [
  {
    name: "grade",
    label: "Grade",
    type: "select",
    required: true,
    options: [
      { value: "6", label: "Grade 6" },
      { value: "7", label: "Grade 7" },
      { value: "8", label: "Grade 8" },
      { value: "9", label: "Grade 9" },
      { value: "10", label: "Grade 10" },
      { value: "11", label: "Grade 11" },
      { value: "12", label: "Grade 12" },
    ],
  },
  {
    name: "school",
    label: "School",
    type: "text",
    placeholder: "Enter your school name",
    required: true,
  },
  {
    name: "subject",
    label: "Select Subject",
    type: "select",
    required: false,
    options: [
      { value: "mathematics", label: "Mathematics" },
      { value: "science", label: "Science" },
      { value: "english", label: "English" },
      { value: "history", label: "History" },
      { value: "computer-science", label: "Computer Science" },
    ],
  },
];

export const teacherFields = [
  {
    name: "subject",
    label: "Select Subject",
    type: "select",
    required: true,
    options: [
      { value: "mathematics", label: "Mathematics" },
      { value: "science", label: "Science" },
      { value: "english", label: "English" },
      { value: "history", label: "History" },
      { value: "computer-science", label: "Computer Science" },
    ],
  },
  {
    name: "school",
    label: "School/Institution",
    type: "text",
    placeholder: "Enter your school/institution name",
    required: true,
  },
];

export const phoneField = {
  name: "phone",
  label: "Phone Number",
  type: "tel",
  placeholder: "Enter your phone number",
  required: false,
};
