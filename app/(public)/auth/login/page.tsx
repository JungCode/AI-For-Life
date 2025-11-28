"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogInMutation } from "@/shared/generated/schemas";
import { toast } from "sonner";
import { useAuth } from "@/shared/hooks/useAuth";
import { useRouter } from "next/dist/client/components/navigation";

interface LoginFormInputs {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const { setAuthToken } = useAuth();
  const router = useRouter();

  const [logInMutate, { loading: isLoading }] = useLogInMutation({
    onCompleted: ({ logIn }) => {
      setAuthToken(logIn.accessToken, logIn.refreshToken);

      toast.success("Welcome aboard!", {
        description: "You have successfully logged in.",
      });

      router.push("/workspace/");
    },
    onError: (error) => {
      toast.error("Login failed", {
        description: error.message || "Something went wrong. Please try again.",
      });
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async ({ email, password }: LoginFormInputs) => {
    await logInMutate({
      variables: {
        input: {
          email,
          password,
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-purple-950/5 to-background flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-float-orbit-1" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-float-orbit-2" />

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-linear-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            <span className="font-bold">
              <span className="text-red-500">V</span>
              <span className="text-yellow-400">K</span>
              <span className="text-blue-500">U </span> ClickSolve
            </span>
          </h1>
          <p className="text-muted-foreground">
            Sign in to your research assistant account
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-black/50 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400/50" />
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-background/50 border border-purple-500/20 rounded-lg pl-10 pr-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400/50" />
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-background/50 border border-purple-500/20 rounded-lg pl-10 pr-10 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400/50 hover:text-purple-400 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  {...register("rememberMe")}
                  type="checkbox"
                  className="w-4 h-4 rounded bg-background/50 border border-purple-500/20 cursor-pointer accent-purple-500"
                />
                <span className="text-sm text-muted-foreground">
                  Remember me
                </span>
              </label>
              <Link
                href="#"
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-linear-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white border-0 py-3 font-semibold transition-all"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-500/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black/50 text-muted-foreground">
                Or continue as guest
              </span>
            </div>
          </div>

          {/* Guest Button */}
          <Link href="/workspace/">
            <Button
              variant="outline"
              className="cursor-pointer w-full border-purple-500/20 hover:border-purple-500/50 bg-background/20 text-foreground"
            >
              Continue as Guest
            </Button>
          </Link>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-teal-400 hover:from-purple-300 hover:to-teal-300 font-semibold transition-all"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
