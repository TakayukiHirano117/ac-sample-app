import { NextRequest } from "next/server";
import { supabase } from "../../../../../utils/supabase";

interface Params {
  params: {
    id: string; // paramsはstring型が期待される
  };
}

export const DELETE = async (
  req: NextRequest,
  { params }: Params
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
