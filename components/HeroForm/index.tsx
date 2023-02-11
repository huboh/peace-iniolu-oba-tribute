import styles from "./hero-form.module.scss";

import { toast } from "react-hot-toast";
import { Poppins } from "@next/font/google";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useClassString } from "../../hooks";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';

import * as Yup from "yup";
import Text from "@/components/Text";
import Modal from '@mui/material/Modal';
import Button from "@/components/Button";

interface HeroFormProps {
  className?: string;
}

const poppins = Poppins({
  style: "normal",
  preload: true,
  display: "swap",
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  subsets: [
    "latin"
  ],
  fallback: [
    "Roboto",
    "Oxygen",
    "Ubuntu"
  ],
});

const FILE_SIZE = 7000000; // 7mb
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

const initialValues = {
  name: "",
  email: "",
  title: "",
  message: "",
  phoneNumber: "",
  relationShip: "",
  displayImage: null,
  tributeImage: null
};

const TributeSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('name is required'),

  title: Yup
    .string()
    .min(2, 'Too Short!')
    .max(250, 'Too Long!')
    .required('tribute title is required'),

  email: Yup
    .string()
    .required("email address is required")
    .email('invalid email address'),

  phoneNumber: Yup
    .string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      "invalid phone number"
    )
    .min(11, 'phone number too short!'),

  relationShip: Yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('your relationship with peace is required'),

  message: Yup
    .string()
    .min(2, 'tribute message is too short!')
    .max(1050, 'tribute message is too long!')
    .required('tribute message is required'),

  displayImage: Yup
    .mixed()
    .required("your profile image is required")
    .test(
      "fileSize",
      "File too large, maximum file size is 7mb",
      value => value && (value as any).size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported File format",
      value => value && SUPPORTED_FORMATS.includes((value as any).type)
    ),

  tributeImage: Yup
    .mixed()
    .nullable()
    .test(
      "fileSize",
      "File too large, maximum file size is 7mb",
      value => !value || (value && (value as any).size <= FILE_SIZE)
    )
    .test(
      "fileFormat",
      "Unsupported File format",
      value => !value || (value && SUPPORTED_FORMATS.includes((value as any).type))
    )
});

const HeroForm: FC<HeroFormProps> = (props) => {
  const router = useRouter();
  const [open, setIsOpen] = useState(false);
  const className = useClassString(styles["form-wrapper"], props.className);

  const onSubmit = async (values: (typeof initialValues), helpers: FormikHelpers<(typeof initialValues)>) => {
    const formData = new FormData();
    const toastId = toast.loading('submitting tribute, please wait.');
    const endPoint = `${process.env.NEXT_PUBLIC_POCKET_BASE_API}/api/collections/tributes/records`;
    const submitTribute = (data: FormData) => fetch(endPoint, { body: data, method: "POST", "Content-Type": 'multipart/form-data' } as any);

    try {
      for (const key in values) {
        formData.append(key, values[(key as keyof typeof initialValues)] || "");
      }

      const response = await submitTribute(formData);
      const pocketBaseResponse = await response.json();

      if (!response.ok) {
        const fields = Object.keys(pocketBaseResponse.data);
        const errors = fields.reduce((errors, key) => ({ ...errors, [key]: pocketBaseResponse.data[key].message }), {});

        helpers.setErrors(errors);

        return toast.error("error submitting tribute", {
          id: toastId,
          duration: 5000
        });
      }

      setIsOpen(false);

      const duration = 4000;
      const successId = toast.success("tribute submitted successfully", {
        id: toastId,
        duration: duration
      });

      setTimeout(() => { toast('refreshing page', { id: successId }); router.refresh(); },
        duration
      );

    } catch (error) {
      toast.error("unexpected error submitting tribute", {
        id: toastId,
        duration: 5000
      });
    }
  };


  return (
    <section className={ className }>
      <button onClick={ () => setIsOpen(true) } className={ `${styles["cta"]} ${poppins.className}` }>
        write a tribute
      </button>

      <Modal
        open={ open }
        onClose={ () => setIsOpen(false) }
        className={ styles["form"] }
      >
        <div className={ poppins.className }>
          <Formik
            onSubmit={ onSubmit }
            initialValues={ initialValues }
            validationSchema={ TributeSchema }
          >
            { ({ setFieldValue, isSubmitting }) => {
              return (
                <Form className="tribute-form">
                  <section className="controls">

                    <Text.Header.H1
                      text="write a tribute"
                      className="form-heading"
                    />

                    <label htmlFor="name">
                      Name <span className="required">*</span>
                    </label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                    />
                    <ErrorMessage
                      name={ "name" }
                      render={ (message) => <span className="error">{ message }</span> }
                    />
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="text"
                      placeholder="johndoe6@gmail.com"
                    />
                    <ErrorMessage
                      name="email"
                      render={ (message) => <span className="error">{ message }</span> }
                    />
                    <label htmlFor="phone">
                      Phone Number
                    </label>
                    <Field
                      id="phone"
                      name="phoneNumber"
                      type="text"
                      placeholder="09012334231"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      render={ (message) => <span className="error">{ message }</span> }
                    />
                    <label htmlFor="relationship">
                      Relationship <span className="required">*</span>
                    </label>
                    <Field
                      id="relationship"
                      name="relationShip"
                      type="text"
                      placeholder="friend"
                    />
                    <ErrorMessage
                      name="relationShip"
                      render={ (message) => <span className="error">{ message }</span> }
                    />
                    <label htmlFor="display-image">
                      Profile Picture <span className="required">*</span>
                    </label>
                    <input
                      id="display-image"
                      name="displayImage"
                      type="file"
                      onChange={ (event) => setFieldValue("displayImage", (event as any)?.currentTarget?.files[0]) }
                    />
                    <ErrorMessage
                      name="displayImage"
                      render={ (message) => <span className="error">{ message }</span> }
                    />
                    <label htmlFor="title">
                      Tribute Header <span className="required">*</span>
                    </label>
                    <Field
                      id="title"
                      name="title" placeholder="In Memory of Peace Iniolu Oba"
                    />
                    <ErrorMessage
                      name="title"
                      render={ (message) => <span className="error">{ message }</span> }
                    />
                    <label htmlFor="message">
                      Tribute Message <span className="required">*</span>
                    </label>
                    <Field
                      id="message"
                      name="message"
                      as="textarea" placeholder="tribute message"
                    />
                    <ErrorMessage
                      name="message"
                      render={ (message) => <span className="error">{ message }</span> }
                    />
                    <label htmlFor="display-image">
                      Tribute Image
                    </label>
                    <input
                      id="display-image"
                      name="tributeImage"
                      type="file"
                      onChange={ (event) => setFieldValue("tributeImage", (event as any).currentTarget.files[0]) }
                    />
                    <ErrorMessage
                      name="tributeImage"
                      render={ (message) => <span className="error">{ message }</span> }
                    />
                  </section>

                  <div className="buttons">
                    <Button
                      label="close"
                      style="see-through"
                      onClick={ () => setIsOpen(false) } disabled={ isSubmitting }
                    />
                    <Button
                      type="submit"
                      label="submit"
                      disabled={ isSubmitting }
                      showSpinner={ isSubmitting }
                    />
                  </div>
                </Form>
              );
            } }
          </Formik>
        </div>
      </Modal>
    </section>
  );
};

export {
  HeroForm as default
};

