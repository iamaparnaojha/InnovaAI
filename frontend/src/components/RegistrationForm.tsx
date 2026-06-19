import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormValues {
  parentName: string;
  childName: string;
  childAge: number;
  email: string;
  phone: string;
  message?: string;
}

const schema = yup.object({
  parentName: yup.string().required("Parent/Guardian name is required"),
  childName: yup.string().required("Child's name is required"),
  childAge: yup
    .number()
    .typeError("Enter a valid age")
    .min(8, "Minimum age is 8")
    .max(14, "Maximum age is 14")
    .required("Child's age is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phone: yup.string().matches(/^\+?[0-9]{7,15}$/, "Enter a valid phone number").required("Phone is required"),
  message: yup.string().optional(),
});

const inputBase =
  "form-input w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary dark:focus:border-primary transition text-sm";
const inputError =
  "form-input w-full px-4 py-3 rounded-xl border border-red-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-red-400 transition text-sm";

const RegistrationForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus('idle');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="register" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 font-semibold text-sm rounded-full px-4 py-1 mb-3">
            Register Now
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-gray-900 dark:text-white">
            Secure Your Spot 🎯
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Fill in the details below and we'll confirm your enrollment within 24 hours.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
          {/* Fee summary */}
          <div className="flex items-center justify-between bg-primary/5 dark:bg-primary/10 rounded-2xl px-5 py-4 mb-6 border border-primary/20">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Workshop Fee</p>
              <p className="text-2xl font-black text-gray-900 dark:text-white">₹2,999</p>
            </div>
            <div className="text-right">
              <span className="inline-block bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold rounded-full px-3 py-1">
                🏷️ Early Bird Price
              </span>
              <p className="text-xs text-gray-400 mt-1">Starts 15 July 2026 · Online · 4 Weeks</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="parentName">
                  Parent / Guardian Name *
                </label>
                <input
                  id="parentName"
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  {...register('parentName')}
                  className={errors.parentName ? inputError : inputBase}
                />
                {errors.parentName && (
                  <p className="mt-1 text-xs text-red-500">{errors.parentName.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="childName">
                  Child's Name *
                </label>
                <input
                  id="childName"
                  type="text"
                  placeholder="e.g. Aryan Sharma"
                  {...register('childName')}
                  className={errors.childName ? inputError : inputBase}
                />
                {errors.childName && (
                  <p className="mt-1 text-xs text-red-500">{errors.childName.message}</p>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="childAge">
                  Child's Age * (8–14)
                </label>
                <input
                  id="childAge"
                  type="number"
                  min={8}
                  max={14}
                  placeholder="e.g. 11"
                  {...register('childAge')}
                  className={errors.childAge ? inputError : inputBase}
                />
                {errors.childAge && (
                  <p className="mt-1 text-xs text-red-500">{errors.childAge.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91XXXXXXXXXX"
                  {...register('phone')}
                  className={errors.phone ? inputError : inputBase}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register('email')}
                className={errors.email ? inputError : inputBase}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">
                Any Questions / Message (optional)
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="e.g. Does my child need any prior experience?"
                {...register('message')}
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              id="register-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-black text-lg rounded-2xl shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '⏳ Submitting...' : '🚀 Enroll Now – ₹2,999'}
            </button>

            {/* Status messages */}
            {status === 'success' && (
              <div className="flex items-center gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
                <span className="text-2xl">🎉</span>
                <div>
                  <p className="font-bold text-green-800 dark:text-green-400">Registration received!</p>
                  <p className="text-sm text-green-600 dark:text-green-500">We'll confirm your enrollment via email within 24 hours.</p>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                <span className="text-2xl">❌</span>
                <p className="text-sm text-red-700 dark:text-red-400">Something went wrong. Please try again or contact us directly.</p>
              </div>
            )}
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          🔒 Your information is safe with us. We never share your data with third parties.
        </p>
      </div>
    </section>
  );
};

export default RegistrationForm;
