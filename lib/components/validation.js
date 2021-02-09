import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  name: Yup.string().max(20, 'Too Long').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required("Required")
});
export default validationSchema;