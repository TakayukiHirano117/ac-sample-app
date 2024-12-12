import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../../../utils/supabase";


export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = parseInt((await params).id);
  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "Todo deleted successfully" },
    { status: 200 }
  );
};
