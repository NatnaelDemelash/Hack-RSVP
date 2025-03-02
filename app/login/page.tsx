'use client';
import React, { useActionState } from 'react';
import { signIn } from '../actions/auth';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

async function signInAction(prevState: void | null, formData: FormData) {
  return await signIn(prevState, formData);
}

const LoginComponent = () => {
  const [state, formAcion] = useActionState(signInAction, null);

  return (
    <form
      action={formAcion}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      {/* Card Container */}
      <div className="w-full max-w-md p-8 space-y-4 rounded-lg shadow-lg bg-white">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {/* Email Field */}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </div>

        {/* Password Field */}
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" required />
        </div>

        {/* Forgot Password Link */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-gray-700 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-gray-800 focus:outline-none focus:underline"
          >
            Forgot your password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginComponent;
