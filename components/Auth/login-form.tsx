'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { GitPullRequestCreateIcon } from "lucide-react"
import { formSchema } from '@/schemas/auth.schema'
import Link from 'next/link'


export function LoginForm() {
  const [isEmailSignUp, setIsEmailSignUp] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Background Image Section */}
      <div 
        className="hidden lg:block bg-cover bg-center" 
        style={{
          backgroundImage: "url('/images/signup-bg.jpg')",
          backgroundColor: "#2DD4BF"
        }}
      />
      
      {/* Form Section */}
      <div className="flex items-center justify-center p-6">
        <Card className="w-full max-w-md border-none shadow-none">
          <CardHeader className="space-y-2">
            <CardTitle className="text-4xl font-bold tracking-tight">Join us today</CardTitle>
            <p className="text-3xl text-muted-foreground">To Explore</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isEmailSignUp ? (
              <>
                {/* Google Sign Up Button */}
                <Button 
                  variant="outline" 
                  className="w-full h-12 text-base font-normal"
                  onClick={() => console.log("Google sign up")}
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Login with Google
                </Button>

                {/* Giithub Sign Up Button */}
                <Button 
                  variant="outline" 
                  className="w-full h-12 text-base font-normal"
                  onClick={() => console.log("Apple sign up")}
                >
                  <GitPullRequestCreateIcon className="mr-2 h-5 w-5" />
                 Login with Github
                </Button>

                {/* OR Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-background px-2 text-muted-foreground">OR</span>
                  </div>
                </div>

                {/* Email/Phone Sign In Button */}
                <Button 
                  className="w-full h-12 text-base"
                  onClick={() => setIsEmailSignUp(true)}
                >
                  Signin with email
                </Button>
              </>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
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
                          <Input placeholder="Enter your password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-12 text-base">
                    Sign Up
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full h-12 text-base"
                    onClick={() => setIsEmailSignUp(false)}
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
              <p className="text-muted-foreground mb-2">Don&apos;t have an account?</p>
              <Link href="/signup">
              <Button 
                variant="outline" 
                className="w-full h-12 text-base font-normal"
                onClick={() => console.log("Log in")}
              >
                Sign up
              </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}