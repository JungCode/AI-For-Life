"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Check if access token exists in localStorage
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      // Redirect to workspace page if logged in
      router.replace("/workspace");
    }
  }, [router]);

  return <>{children}</>;
}
