import * as Yup from "yup";

export const AddGameSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .min(0, "Price must be a positive number")
    .required("Required"),
  description: Yup.string()
    .min(10, "Description is too short!")
    .max(500, "Description is too long!")
    .required("Required"),
  imageUrl: Yup.string().url("Invalid URL").required("Required"),
  raiting: Yup.number()
    .min(0, "Rating must be between 0 and 10")
    .max(10, "Rating must be between 0 and 10")
    .required("Required"),
  gameLink: Yup.string().url("Invalid URL").required("Required"),
  category: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
