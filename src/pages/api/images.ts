import fs from "node:fs/promises";

export async function GET() {
  const images = await fs.readdir(
    new URL("../../../public/gallery", import.meta.url)
  );
  return new Response(JSON.stringify(images), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
