import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParamas = request.nextUrl.searchParams;
  const page = searchParamas.get("page") || 1;
  const number = searchParamas.get("per_page") || 6;
  // console.log("取得したページ", page);

  const res = await fetch(
    `https://qiita.com/api/v2/authenticated_user/items?page=${page}&per_page=${number}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.QIITA_API_TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return Response.json(data);
}
