"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationButton({
  searchParams,
}: {
  searchParams: string;
}) {
  const [numberSetPagination, setNumberSetPagination] = useState(3);
  const prevButtonPage = () => {
    return (window.location.href = `/?page=${parseFloat(searchParams) - 1}`);
  };

  const nextButtonPage = () => {
    return searchParams === undefined
      ? (window.location.href = `/?page=2`)
      : (window.location.href = `/?page=${parseFloat(searchParams) + 1}`);
  };

  const arraySet =
    parseFloat(searchParams) <= 2
      ? [1, 2, 3, 4, 5]
      : Array.from(
          { length: numberSetPagination },
          (v, i) => i + parseFloat(searchParams)
        );

  const arrayPrevSet =
    parseFloat(searchParams) <= 2
      ? []
      : Array.from({ length: 2 }, (v, i) => i + (parseFloat(searchParams) - 2));

  const fixPaginationNumber = [...arrayPrevSet, ...arraySet];

  return (
    <div className="mt-20">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              onClick={prevButtonPage}
              className="gap-1 pl-2.5"
              variant="ghost"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Prev</span>
            </Button>
          </PaginationItem>
          {fixPaginationNumber.map((paginationNumber) => (
            <PaginationItem key={paginationNumber}>
              <PaginationLink
                href={`/?page=${paginationNumber}`}
                isActive={paginationNumber === parseFloat(searchParams)}
              >
                {paginationNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <Button
              onClick={nextButtonPage}
              className="gap-1 pr-2.5"
              variant="ghost"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
