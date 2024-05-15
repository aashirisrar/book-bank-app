import bcrypt from "bcrypt";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const session = await auth();

        if (!session) {
            return NextResponse.json(
                { error: "Not Authenticated!" },
                { status: 200 }
            );
        }

        const user = await prisma.user.findUnique({
            where: {
                id: session?.user?.id!,
            }
        });

        return NextResponse.json(
            { success: "Profile Found!", isLoggedin: true, user: user },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json({ error: e }, { status: 500 });
    }
}