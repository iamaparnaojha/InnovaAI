import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().matches(/^[0-9]{10,15}$/, "Enter a valid phone number").required("Phone is required"),
  message: yup.string().required("Message is required"),
});

export const EnquiryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<EnquiryFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: EnquiryFormData) => {
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="grid gap-4 max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Apply for the Workshop</h2>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className={`w-full p-2 border rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
          {...register("name")}
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className={`w-full p-2 border rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
          {...register("email")}
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          className={`w-full p-2 border rounded ${errors.phone ? "border-red-500" : "border-gray-300"}`}
          {...register("phone")}
        />
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={4}
          className={`w-full p-2 border rounded ${errors.message ? "border-red-500" : "border-gray-300"}`}
          {...register("message")}
        />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {isSubmitSuccessful && <p className="text-green-600 mt-2">Enquiry submitted! 🎉</p>}
    </form>
  );
};
