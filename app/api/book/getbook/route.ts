import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const bookId = await req.json();

        // update the user's profile
        const book = await prisma.book.findUnique({
            where: {
                bookId
            },
        })

        // find the owner of book
        const foundUser = await prisma.user.findUnique({
            where: {
                id: book?.userId
            }
        });

        return NextResponse.json(
            { success: "Posts Found!", book: book, user: foundUser },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}