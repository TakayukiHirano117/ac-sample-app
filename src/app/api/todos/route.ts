import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../../utils/supabase";

export const GET = async () => {
  const { data: todos, error } = await supabase.from("todos").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(todos, { status: 200 });
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { title } = body;
  const { data, error } = await supabase.from("todos").insert({ title: title });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
};

