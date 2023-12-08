"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const router = useRouter();
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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    //TODO: Handle submit
    if (data["password"] !== data["confirmPassword"]) {
      return setError(
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

    axios
      .post("/api/register", data)
      .then(() =>
        signIn("Credentials", {
          ...data,
          redirect: false,
          callbackUrl: "/home",
        })
      )
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid Credentials");
        }

        if (callback?.ok) {
          router.push("/home");
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!");
      });
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
