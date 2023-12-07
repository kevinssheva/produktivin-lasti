import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export async function POST(request: Request) {
    try {
        const { name, email, phoneNumber, password } = await request.json()

        if (!name || !email || !phoneNumber || !password) {
            return NextResponse.json({error: 'Data tidak lengkap!'}, { status: 400 })
        }
        const isUserExisted = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (isUserExisted) {
            return NextResponse.json({ message: 'Email sudah terdaftar!' }, { status: 406 })
        }
        
        const hashedPassword = await bcrypt.hash(password, 5)
        
        const user = await prisma.user.create({
            data: { name, email, phoneNumber, password: hashedPassword}
        })
        
        return NextResponse.json(user, { status: 201 })
    } catch (error: any) {
        return NextResponse.json(error)
    }
}

export async function GET() {
    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return NextResponse.json(users, { status: 200 })
    } catch (error: any) {
        return NextResponse.json(error)
    }
}