import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        // const session = await auth();

        // if (!session) {
        //     return NextResponse.json(
        //         { error: "Not Authenticated!" },
        //         { status: 200 }
        //     );
        // }

        // const currentUser = await prisma.user.findUnique({
        //     where: {
        //         email: session.user?.email!
        //     }
        // })

        // find the books
        const fetchedBooks = await prisma.book.findMany({});


        return NextResponse.json(
            { success: "Books Found!", books: fetchedBooks },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}