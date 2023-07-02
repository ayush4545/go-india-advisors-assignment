import { NextResponse } from "next/server";
import { disussionForumCardDummyData } from "@/constants";

export const GET = async (response) => {
     return NextResponse.json(disussionForumCardDummyData)
}