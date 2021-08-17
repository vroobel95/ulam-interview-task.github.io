import "./ChooseColumnForm.scss";

import React from "react";
import NumberInput from "../shared/NumberInput";
import Button from "../shared/Button";
import ChooseColumnFormModel from "../../models/ChooseColumnFormModel";
import { Form, Formik } from "formik";
import * as Yup from "yup";

interface ChooseColumnFormProps {
  onSubmit: (model: ChooseColumnFormModel) => void;
}

const ChooseColumnForm: React.FC<ChooseColumnFormProps> = (props) => {
  const choseColumnFormSchema = Yup.object().shape({
    city: Yup.number()
      .min(1, "City column value is too low")
      .notOneOf(
        [
          Yup.ref("state"),
          Yup.ref("zipCode"),
          Yup.ref("address"),
          Yup.ref("category"),
        ],
        "City column value is same as at least one value in form"
      )
      .required("Required"),
    state: Yup.number()
      .min(1, "State column value is too low")
      .notOneOf(
        [
          Yup.ref("city"),
          Yup.ref("zipCode"),
          Yup.ref("address"),
          Yup.ref("category"),
        ],
        "State column value is same as at least one value in form"
      )
      .required("Required"),
    zipCode: Yup.number()
      .min(1, "Zip-code column value is too low")
      .notOneOf(
        [
          Yup.ref("city"),
          Yup.ref("state"),
          Yup.ref("address"),
          Yup.ref("category"),
        ],
        "Zip-Code column value is same as at least one value in form"
      )
      .required("Required"),
    address: Yup.number()
      .min(1, "Address column value is too low")
      .notOneOf(
        [
          Yup.ref("city"),
          Yup.ref("state"),
          Yup.ref("zipCode"),
          Yup.ref("category"),
        ],
        "Address column value is same as at least one value in form"
      )
      .required("Required"),
    category: Yup.number()
      .min(1, "Category column value is too low")
      .notOneOf(
        [
          Yup.ref("city"),
          Yup.ref("state"),
          Yup.ref("zipCode"),
          Yup.ref("address"),
        ],
        "Category column value is same as at least one value in form"
      )
      .required("Required"),
  });

  const handleSubmit = (values: ChooseColumnFormModel) => {
    props.onSubmit(values);
  };

  return (
    <Formik
      initialValues={
        {
          city: 0,
          state: 0,
          zipCode: 0,
          address: 0,
          category: 0,
        } as ChooseColumnFormModel
      }
      validationSchema={choseColumnFormSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="choose-column-form">
          <div className="inputs">
            <NumberInput
              className="city"
              text="City column"
              for="city"
              error={errors.city}
              touched={touched.city}
            />
            <NumberInput
              className="state"
              text="State column"
              for="state"
              error={errors.state}
              touched={touched.state}
            />
            <NumberInput
              className="zip-code"
              text="Zip-code column"
              for="zipCode"
              error={errors.zipCode}
              touched={touched.zipCode}
            />
            <NumberInput
              className="address"
              text="Address column"
              for="address"
              error={errors.address}
              touched={touched.address}
            />
            <NumberInput
              className="category"
              text="Category column"
              for="category"
              error={errors.category}
              touched={touched.category}
            />
          </div>
          <Button
            type="submit"
            className="submit"
            text="Submit"
            disabled={
              errors.city !== undefined ||
              errors.address !== undefined ||
              errors.category !== undefined ||
              errors.state !== undefined ||
              errors.zipCode !== undefined
            }
          />
        </Form>
      )}
    </Formik>
  );
};

export default ChooseColumnForm;
