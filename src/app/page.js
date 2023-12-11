"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { useMutation } from "@tanstack/react-query";
import { requestWithoutAuth } from "@/fetcher";

export default function Home() {
  const { mutate, data, isPending, error } = useMutation({
    mutationFn: (newTodo) => {
      return requestWithoutAuth().post(
        "https://dev-api.gitymarket.ir/v1/clients/auth/verification",
        newTodo
      );
    },
  });

  console.log("isLoading :>> ", {
    isPending,
    error,
  });

  return (
    <button
      onClick={() => {
        mutate({ code: "4234", token: "2HJ9eCl0GC" });
      }}
    >
      Create Todo
    </button>
  );
}
