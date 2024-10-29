import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const result = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${data.token}`
    );
    return NextResponse.json(result.data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
