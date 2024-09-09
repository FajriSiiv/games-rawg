"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function LoginButton() {
  return (
    <Button
      onClick={() => signIn("github")}
      className="flex justify-center items-center gap-x-1"
    >
      Login
      <FaGithub />
    </Button>
  );
}
