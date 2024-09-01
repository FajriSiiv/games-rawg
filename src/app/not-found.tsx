"use client";
import { Button } from "@/components/ui/button";

// app/not-found.js
export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col gap-5 p-10">
      <h1 className="text-5xl font-semibold">Page Not Found</h1>
      <Button onClick={() => (window.location.href = "/")}>Go Back</Button>
    </div>
  );
}
