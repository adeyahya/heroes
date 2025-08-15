import fs from "node:fs/promises";

export async function GET() {
  const getGalleryPath = () =>
    import.meta.env.DEV
      ? "../../src/assets/gallery"
      : "../../../src/assets/gallery";
  const images = await fs.readdir(new URL(getGalleryPath(), import.meta.url));
  return new Response(JSON.stringify(images), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
