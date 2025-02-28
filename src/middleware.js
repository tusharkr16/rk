import { NextResponse } from "next/server";

export function middleware(req ) {
    const token = req.cookies.get("token")?.value?.replace(/['"]+/g, "");
    const url = req.nextUrl;

    console.log(token, "token")


    const privateRoutes = ["/dashboard", "/profile", "/settings", "/protected/*"];


    const isPrivateRoute = privateRoutes.some((route) => url.pathname.startsWith(route));

    if (isPrivateRoute && !token) {

        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}


export const config = {
    matcher: ["/dashboard", "/profile", "/settings", "/protected/:path*"],
};
