"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { GitPullRequestCreateIcon } from "lucide-react";
import { formSchema } from "@/schemas/auth.schema";
import Link from "next/link";
import { signup } from "@/app/actions/signup";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/ui/Loader";

export function SignupForm() {
  const [isEmailSignUp, setIsEmailSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const loadingToast = toast.loading("Creating your account...");

    try {
      const response = await signup(values);

      toast.dismiss(loadingToast);

      if (response.success) {
        toast.success(response.message || "Account created successfully!");
        form.reset();
        router.push("/login");
      } else {
        toast.error(response.error || "Failed to create account");
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(
        typeof error === "string" ? error : "An unexpected error occurred"
      );
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSocialSignup = (provider: "google" | "github") => {
    toast.loading(`Connecting to ${provider}...`);
    // Add your social signup logic here
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Background Image Section */}
      <div
        className="hidden lg:block bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/signup-bg.jpg')",
          backgroundColor: "#2DD4BF",
        }}
      />

      {/* Form Section */}
      <div className="flex items-center justify-center p-6">
        <Card className="w-full max-w-md border-none shadow-none">
          <CardHeader className="space-y-2">
            <CardTitle className="text-4xl font-bold tracking-tight">
              Join us today
            </CardTitle>
            <p className="text-3xl text-muted-foreground">To Explore</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isEmailSignUp ? (
              <>
                {/* Google Sign Up Button */}
                <Button
                  variant="outline"
                  className="w-full h-12 text-base font-normal"
                  onClick={() => handleSocialSignup("google")}
                  disabled={isLoading}
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    {/* ... (Google SVG path remains the same) ... */}
                  </svg>
                  Sign up with Google
                </Button>

                {/* Github Sign Up Button */}
                <Button
                  variant="outline"
                  className="w-full h-12 text-base font-normal"
                  onClick={() => handleSocialSignup("github")}
                  disabled={isLoading}
                >
                  <GitPullRequestCreateIcon className="mr-2 h-5 w-5" />
                  Sign up with Github
                </Button>

                {/* OR Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-background px-2 text-muted-foreground">
                      OR
                    </span>
                  </div>
                </div>

                {/* Email Sign Up Button */}
                <Button
                  className="w-full h-12 text-base"
                  onClick={() => setIsEmailSignUp(true)}
                  disabled={isLoading}
                >
                  Sign up with email
                </Button>
              </>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            {...field}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full h-12 text-base relative"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <Loader />
                        <span>Creating account...</span>
                      </div>
                    ) : (
                      "Sign Up"
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-12 text-base"
                    onClick={() => setIsEmailSignUp(false)}
                    disabled={isLoading}
                  >
                    Back
                  </Button>
                </form>
              </Form>
            )}

            {/* Terms Text */}
            <p className="text-sm text-muted-foreground text-center">
              By signing up, you agree to the{" "}
              <a href="#" className="underline hover:text-primary">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-primary">
                Privacy Policy
              </a>
              , including{" "}
              <a href="#" className="underline hover:text-primary">
                cookie use
              </a>
              .
            </p>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-muted-foreground mb-2">
                Already have an account?
              </p>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="w-full h-12 text-base font-normal"
                  disabled={isLoading}
                >
                  Log in
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
