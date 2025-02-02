export async function GET() {
  const res = await fetch("https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=6", {
    headers: {
      Authorization: `Bearer ${process.env.QIITA_API_TOKEN}`,
    },
  });
  const data = await res.json();
  return Response.json(data);
}
