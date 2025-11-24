"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { storageUtils } from "@/shared/utils";
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from "@/shared/constants/storageKey";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const accessToken = storageUtils.get(LOCAL_STORAGE_ACCESS_TOKEN_KEY);

    if (!accessToken) {
      router.push("/auth/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) {
    return (
      <div className="flex items-center justify-center h-full">Loading...</div>
    );
  }

  return <>{children}</>;
}
