import { Wrap, WrapItem, Box, Center } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { responsivePaddings } from '../../constants';

import { Button } from '@/components/Elements';
import { Field } from '@/components/Form';

export function FirstStep({ nextStep, setStepState, setBasicData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(firstStepSchema),
    defaultValues: {
      email: '',
      birthdate: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  useEffect(() => {
    if (errors && Object.keys(errors).length !== 0) {
      setStepState('error');
    } else {
      setStepState(undefined);
    }
  }, [errors, setStepState]);

  const onSubmit = (data) => {
    setBasicData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrap textAlign="left">
        <WrapItem paddingLeft={responsivePaddings}>
          <Box>
            <Field
              type="email"
              name="email"
              label="Email"
              placeholder="joemama@gmail.com"
              error={errors.email}
              register={register}
            />
          </Box>
        </WrapItem>
        <WrapItem paddingLeft={responsivePaddings}>
          <Box>
            <Field
              type="date"
              name="birthdate"
              label="Birthdate"
              css={`
                ::-webkit-calendar-picker-indicator {
                  background: url(https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-16.png)
                    center/80% no-repeat;
                  filter: invert(1);
                }
              `}
              error={errors.birthdate}
              register={register}
            />
          </Box>
        </WrapItem>
        <WrapItem paddingLeft={responsivePaddings}>
          <Box>
            <Field
              type="password"
              name="password"
              label="Password"
              placeholder="********"
              error={errors.password}
              register={register}
            />
          </Box>
        </WrapItem>
        <WrapItem paddingLeft={responsivePaddings}>
          <Box>
            <Field
              type="password"
              name="passwordConfirmation"
              label="Password Confirmation"
              placeholder="********"
              error={errors.passwordConfirmation}
              register={register}
            />
          </Box>
        </WrapItem>
      </Wrap>
      <Center>
        <Button type="submit" variant="accent" margin="40px 0">
          Next
        </Button>
      </Center>
    </form>
  );
}

const firstStepSchema = yup.object({
  email: yup.string().email('You must enter a valid email.').required('This field is required.'),
  birthdate: yup.string().required('This field is required.'),
  password: yup
    .string()
    .min(8, 'Minimum eight (8) characters.')
    .required('This field is required.'),
  passwordConfirmation: yup
    .string()
    .required('This field is required.')
    .oneOf([yup.ref('password'), null], 'Both passwords must match.'),
});
