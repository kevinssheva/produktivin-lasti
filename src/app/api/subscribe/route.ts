import { NextRequest, NextResponse } from "next/server";
import { SubscriptionType, PaymentMethod } from "@prisma/client";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/actions/get-current-user";
export async function POST(req: NextRequest) {
  try {
    const type = req.nextUrl.searchParams.get("type") as SubscriptionType;
    const payment = req.nextUrl.searchParams.get("payment") as PaymentMethod;
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    const endDate = () => {
      if (type === "STARTER_PRO") {
        return new Date(new Date().setMonth(new Date().getMonth() + 1));
      } else {
        return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      }
    };
    const subscription = await prisma.subscription.create({
      data: {
        startDate: new Date(),
        endDate: endDate(),
        type: type,
        payment,
      },
    });

    const userSubscription = await prisma.userSubscription.create({
      data: {
        userId: user.id,
        subscriptionId: subscription.id,
      },
    });

    const updateSubscription = await prisma.userSubscription.updateMany({
      where: {
        userId: user.id,
        isActive: true,
        NOT: {
          id: userSubscription.id,
        },
      },
      data: {
        isActive: false,
      },
    });

    return NextResponse.json(userSubscription, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(error);
  }
}
