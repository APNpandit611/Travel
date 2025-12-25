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
        <Breadcrumb className="fixed top-24 left-0 right-0 z-50 w-fit backdrop-blur-xl shadow-lg rounded-xl px-4 py-2">
            <BreadcrumbList className="bg-transparent">
                {/* Home */}
                <BreadcrumbItem>
                    <BreadcrumbLink
                        href="/"
                        className="flex items-center gap-1 text-white text-xs hover:text-white/60 transition-colors"
                    >
                        <Home className="size-4" />
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments
                        .slice(0, index + 1)
                        .join("/")}`;
                    const isLast = index === pathSegments.length - 1;

                    const label = segment
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase());

                    return (
                        <React.Fragment key={href}>
                            <BreadcrumbSeparator className="text-slate-400" />

                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="text-white/60 font-medium">
                                        {label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink
                                        href={href}
                                        className="text-white hover:text-white/60 transition-colors"
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
