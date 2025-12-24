"use client";

import { ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function CustomSignIn() {
  const { isLoaded, user } = useUser();
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;
    if (role) {
      alert(`Redirecting to /${role} dashboard`);
      router.push(`/${role}`);
    }
  }, [user, router]);
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
     
      <div className="w-full max-w-md mx-4">
        <ClerkLoading>
          <div className="h-10 w-10 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin mx-auto" />
        </ClerkLoading>

        <ClerkLoaded>
          <SignIn.Root>
            <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 px-8 py-10 text-slate-900">
              {/* Header */}
              <header className="mb-8 text-center">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                  Travels Admin
                </h1>
                <p className="text-sm text-slate-500 mt-2">
                  Enter your credentials to manage the portal.
                </p>
              </header>

              {/* SignIn Form */}
              <SignIn.Step name="start">
                <div className="space-y-5">
                  {/* Username */}
                  <Clerk.Field name="identifier">
                    <div className="space-y-1.5">
                      <Clerk.Label className="block text-sm font-semibold text-slate-700">
                        Username
                      </Clerk.Label>
                      <Clerk.Input
                        type="text"
                        placeholder="e.g. admin_01"
                        className="w-full rounded-lg bg-white border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                        onFocus={() => setSubmitting(false)}
                      />
                      <Clerk.FieldError className="text-xs font-medium text-rose-600 mt-1" />
                    </div>
                  </Clerk.Field>

                  {/* Password */}
                  <Clerk.Field name="password">
                    <div className="space-y-1.5">
                      <Clerk.Label className="block text-sm font-semibold text-slate-700">
                        Password
                      </Clerk.Label>
                      <Clerk.Input
                        type="password"
                        placeholder="••••••••"
                        className="w-full rounded-lg bg-white border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      />
                      <Clerk.FieldError className="text-xs font-medium text-rose-600 mt-1" />
                    </div>
                  </Clerk.Field>

                  <Clerk.GlobalError className="p-3 rounded-lg bg-rose-50 border border-rose-100 text-xs font-medium text-rose-600 text-center" />

                  {/* Submit Button */}
                  <SignIn.Action
                    submit
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold py-3 transition-all shadow-md shadow-indigo-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50"
                    onClick={() => setSubmitting(true)}
                  >
                    {submitting ? (
                      <>
                        Signing in...
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </SignIn.Action>
                </div>
              </SignIn.Step>
            </div>

            {/* Footer */}
            <footer className="mt-8 text-center">
              <p className="text-xs text-slate-400">
                © {new Date().getFullYear()} Travels Management Systems
              </p>
            </footer>
          </SignIn.Root>
        </ClerkLoaded>
      </div>
    </main>
  );
}
