import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const adminRoute = createRouteMatcher(["/admin(.*)"]);
const publicRoutes = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    if (publicRoutes(req)) return; // allow sign-in/sign-up

    if (adminRoute(req)) {
        // Call the auth function to get session info
        const session = await auth();

        if (!session?.userId) {
            // Redirect to your custom sign-in page
            return NextResponse.redirect(new URL("/sign-in", req.url));
        }
    }
});
