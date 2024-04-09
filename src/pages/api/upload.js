export const POST = async ({ request }) => {
  const body = await request.json();
  const url = body.url;
  return new Response(
    JSON.stringify({
      url: url,
    })
  );
};
