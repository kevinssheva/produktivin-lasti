"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AuthForm = () => {
  const router = useRouter();
  const [type, setType] = useState("REGISTER");
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
    if (type === "REGISTER") {
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
          signIn("credentials", {
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
    }

    if (type === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
        callbackUrl: "/home",
      })
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
    }
  };

  const toggleType = () => {
    if (type === "REGISTER") {
      setType("LOGIN");
    } else {
      setType("REGISTER");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex-1 bg-gradient-to-b from-primary-200 to-primary-300 rounded-t-[2rem] text-white text-sm px-[5%] py-5 flex flex-col gap-2"
    >
      <div className="text-center">
        {type === "REGISTER" ? (
          <>
            <h1 className="text-2xl font-bold">Join our member now!</h1>
            <p>Create Account</p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p>Login into your account</p>
          </>
        )}
      </div>
      {type === "REGISTER" && (
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
      )}
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
      {type === "REGISTER" && (
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
      )}
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
      {type === "REGISTER" && (
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
      )}
      <div className="mx-auto mt-auto">
        <Button text="Submit" />
      </div>
      {type === "REGISTER" ? (
        <p className="text-center">
          Already have an account?{" "}
          <span className="underline cursor-pointer" onClick={toggleType}>
            Login
          </span>
        </p>
      ) : (
        <p className="text-center">
          Doesnt have an account yet?{" "}
          <span className="underline cursor-pointer" onClick={toggleType}>
            Sign Up
          </span>
        </p>
      )}
    </form>
  );
};

export default AuthForm;
