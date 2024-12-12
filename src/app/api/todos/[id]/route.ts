import { NextRequest } from "next/server";
import { supabase } from "../../../../../utils/supabase";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = parseInt(params.id);
  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(
    { message: "Todo deleted successfully" },
    { status: 200 }
  );
};
