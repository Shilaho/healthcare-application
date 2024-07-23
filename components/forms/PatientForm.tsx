"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomFormField from '../CustomFormField';
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/Validation"
import { useRouter } from "next/navigation"

export enum FormFieldType{
INPUT = 'input',
TEXTAREA = 'textarea',
PHONE_INPUT = 'phoneInput',
CHECKBOX = 'checkbox',
DATE_PICKER = 'date_picker',
SELECT = 'select',
SKELETON = 'skeleton',
}

const PatientForm =() => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
        name: "",
        email: "",
        phone: "",
    },
  })


async function onSubmit({ name, email, phone}: z.infer<typeof UserFormValidation>) {
      setIsLoading(true);

      try {
      // const userData = { name,email,phone  };
      // const user = await createUser(userData);

      // if(user) router.push(`/patients/${user.$id}/register`)

      } catch (error) {
        console.log(error);

      }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="username"
          label="Username"
          placeholder="shilaho"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="bshilaho@shilzgfx.pro"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="(254) 123-4567"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
    )
}

export default PatientForm