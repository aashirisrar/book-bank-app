import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const { title, details, price, image } = await req.json();

        const session = await auth();

        if (!session) {
            return NextResponse.json(
                { error: "Not Authenticated!" },
                { status: 200 }
            );
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user?.email!
            }
        })

        // create the book
        const createdBook = await prisma.book.create({
            data: {
                title,
                details,
                image,
                price: parseInt(price),
                userId: currentUser?.id!,
            },
        })

        return NextResponse.json(
            { success: "Book Created!", book: createdBook },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}