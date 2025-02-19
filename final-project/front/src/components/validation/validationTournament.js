import * as Yup from "yup";

export const AddTournamentSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  gameName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  imageUrl: Yup.string().url("Invalid URL").required("Required"),
  startTime: Yup.string().required("Required"),
  playersCount: Yup.number()
    .min(1, "Must be at least 1")
    .max(1000, "Too Many Players!")
    .required("Required"),
  category: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
