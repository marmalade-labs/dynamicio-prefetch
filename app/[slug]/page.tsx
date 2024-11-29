export function generateStaticParams() {
  return [{ slug: "static" }]
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div>{slug}</div>
  )
}