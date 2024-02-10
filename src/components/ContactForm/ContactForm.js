import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Error,
  Input,
  InputContainer,
  Label,
  StyledForm,
} from './ContactForm.styled';
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(150, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .moreThan(5, 'Too Short!')
    .positive()
    .required('Required'),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <InputContainer>
          <Input name="name" placeholder="Jane Human" />
          <Label htmlFor="name">Full Name</Label>
          <Error name="name" component="span" />
        </InputContainer>
        <InputContainer>
          <Input name="number" placeholder="+380-95-999-88-77" />
          <Label htmlFor="number">Number</Label>
          <Error name="number" component="span" />
        </InputContainer>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
