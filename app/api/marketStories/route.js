import { NextResponse } from "next/server";
import { marketStories } from "@/constants";

export const GET = async (response) => {
     return NextResponse.json(marketStories)
}