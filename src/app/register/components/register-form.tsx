"use client";

import Button from "@/app/components/button";
import Input from "@/app/components/input";
import { FieldValues, useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    //TODO: Handle submit
    if (data["password"] !== data["confirmPassword"]) {
      setError(
        "confirmPassword",
        {
          type: "manual",
          message: "Unmatched password",
        },
        {
          shouldFocus: true,
        }
      );
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 bg-gradient-to-b from-primary-200 to-primary-300 rounded-t-[2rem] text-white text-sm px-[5%] py-5 flex flex-col gap-2"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold">Join our member now!</h1>
        <p>Create Account</p>
      </div>
      <div>
        <p>Name</p>
        <Input
          id="name"
          label="Enter your name"
          register={register}
          errors={errors}
          required
        />
      </div>
      <div>
        <p>Email</p>
        <Input
          id="email"
          label="Enter your email"
          register={register}
          errors={errors}
          required
        />
      </div>
      <div>
        <p>Phone Number</p>
        <Input
          id="phoneNumber"
          label=""
          register={register}
          errors={errors}
          type="number"
          isPhone
          required
        />
      </div>
      <div>
        <p>Password</p>
        <Input
          id="password"
          label="Enter your password"
          register={register}
          errors={errors}
          type="password"
          required
        />
      </div>
      <div>
        <p>Confirm Password</p>
        <Input
          id="confirmPassword"
          label="Re-enter your password"
          register={register}
          errors={errors}
          type="password"
          required
        />
      </div>
      <div className="mx-auto my-3">
        <Button text="Submit" />
      </div>
    </form>
  );
};

export default RegisterForm;
