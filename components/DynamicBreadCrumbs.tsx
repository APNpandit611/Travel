"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

export function DynamicBreadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb className="bg-transparent p-0 ">
      <BreadcrumbList className="bg-transparent">
        {/* Home */}
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="flex items-center gap-1 text-slate-900 hover:text-slate-200 transition-colors"
          >
            <Home className="h-4 w-4" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          const label =
            segment
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase());

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator className="text-slate-500" />

              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-slate-200 font-medium">
                    {label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={href}
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
