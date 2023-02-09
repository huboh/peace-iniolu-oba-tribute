import styles from "./hero-form.module.scss";

import { useRouter } from "next/router";
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

const FILE_SIZE = 10485760;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];

const TributeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('name is required'),

  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('title is required'),

  email: Yup.string()
    .email('Invalid email'),

  relationShip: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('relation is required'),

  message: Yup.string()
    .min(2, 'Too Short!')
    .max(1050, 'message too long!')
    .required('message is required'),

  displayImage: Yup.mixed()
    .required("profile image is required")
    .test(
      "fileSize",
      "File too large, maximum file size is 10mb",
      value => value && (value as any).size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value && SUPPORTED_FORMATS.includes((value as any).type)
    ),

  tributeImage: Yup.mixed()
    .required("tribute image is required")
    .test(
      "fileSize",
      "File too large, maximum file size is 10mb",
      value => value && (value as any).size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value && SUPPORTED_FORMATS.includes((value as any).type)
    )
});

const HeroForm: FC<HeroFormProps> = (props) => {
  const router = useRouter();
  const [open, setIsOpen] = useState(false);
  const className = useClassString(styles["form-wrapper"], props.className);

  const onSubmit = async (event: any, helpers: FormikHelpers<any>) => {
    const formData = new FormData();
    const apiRoute = `${process.env.NEXT_PUBLIC_POCKET_BASE_API}/api/collections/tributes/records`;
    const submitTribute = (data: any) => fetch(apiRoute, { body: data, method: "POST", "Content-Type": 'multipart/form-data' } as any);

    try {
      for (const key in event) {
        formData.append(key, event[key]);
      }

      const response = await submitTribute(formData);
      const pocketBaseResponse = await response.json();

      if (!response.ok) {
        const fields = Object.keys(pocketBaseResponse.data);
        const errors = fields.reduce((errors, key) => ({ ...errors, [key]: pocketBaseResponse.data[key].message }), {});
        return helpers.setErrors(errors);
      }

      setIsOpen(false); alert("tribute submitted successfully");
      router.reload();

    } catch (error) {
      alert("encountered an unexpected error");
    }
  };

  return (
    <section className={ className }>
      <button onClick={ () => setIsOpen(true) } className={ styles["cta"] }>
        write a tribute
      </button>

      <Modal
        open={ open }
        onClose={ () => setIsOpen(false) }
        className={ styles["form"] }
      >
        <div>
          <Formik
            onSubmit={ onSubmit }
            validationSchema={ TributeSchema }
            initialValues={ { name: "", email: "", title: "", message: "", relationShip: "", displayImage: null, tributeImage: null } as any }
          >
            { ({ setFieldValue, isSubmitting }) => {
              return (
                <Form className="tribute-form">
                  <Text.Header.H1>Write a Tribute</Text.Header.H1>

                  <label htmlFor="name">Name <span className="required">*</span></label>
                  <Field id="name" name="name" type="text" placeholder="David Itunu" />
                  <ErrorMessage name="name" render={ (message) => <span className="error">{ message }</span> } />

                  <label htmlFor="email">Email</label>
                  <Field id="email" name="email" type="text" placeholder="davidItunu16@gmail.com" />
                  <ErrorMessage name="email" render={ (message) => <span className="error">{ message }</span> } />

                  <label htmlFor="phone">Phone Number</label>
                  <Field id="phone" name="phoneNumber" type="text" placeholder="09012334231" />
                  <ErrorMessage name="phoneNumber" render={ (message) => <span className="error">{ message }</span> } />

                  <label htmlFor="relationship">Relationship <span className="required">*</span></label>
                  <Field id="relationship" name="relationShip" type="text" placeholder="friend" />
                  <ErrorMessage name="relationShip" render={ (message) => <span className="error">{ message }</span> } />

                  <label htmlFor="title">Title <span className="required">*</span></label>
                  <Field id="title" name="title" placeholder="tribute title" />
                  <ErrorMessage name="title" render={ (message) => <span className="error">{ message }</span> } />

                  <label htmlFor="message">Message <span className="required">*</span></label>
                  <Field id="message" name="message" as="textarea" placeholder="tribute message" />
                  <ErrorMessage name="message" render={ (message) => <span className="error">{ message }</span> } />

                  <label htmlFor="display-image">Profile Picture <span className="required">*</span></label>
                  <input id="display-image" name="displayImage" type="file" onChange={ (event) => setFieldValue("displayImage", (event as any)?.currentTarget?.files[0]) } />
                  <ErrorMessage name="displayImage" render={ (message) => <span className="error">{ message }</span> } />

                  <label htmlFor="display-image">Tribute Image <span className="required">*</span></label>
                  <input id="display-image" name="tributeImage" type="file" onChange={ (event) => setFieldValue("tributeImage", (event as any).currentTarget.files[0]) } />
                  <ErrorMessage name="tributeImage" render={ (message) => <span className="error">{ message }</span> } />

                  <div className="buttons">
                    <Button label="close" onClick={ () => setIsOpen(false) } disabled={ isSubmitting } />
                    <Button type="submit" label="submit" disabled={ isSubmitting } />
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

