import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const name = await req.json();

        const user = await prisma.user.findUnique({
            where: {
                name
            }
        });

        const books = await prisma.book.findMany({
            where: {
                userId: user?.id!
            }
        })

        return NextResponse.json(
            { success: "User Found!", user: user, books: books },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}