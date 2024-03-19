export function getMasonryImages({ images, chunkSize }: { images: string[]; chunkSize: number }) {
  let chunks: string[][] = [];
  for (let i = 0; i < images.length; i += chunkSize) {
    const chunk = images.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
}