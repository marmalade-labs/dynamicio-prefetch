import Link from "next/link";
import { cache } from "react";
import { nanoid } from 'nanoid'

export function generateStaticParams() {
  return [{ slug: "static" }]
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = await fetchTitle(slug)
  return (
    <div className="flex flex-col gap-2">
      <div>{title}</div>
      <NextLink />
    </div>
  )
}

const fetchTitle = cache(async function fetchTitle(slug: string) {
  "use cache"
  await new Promise(resolve => setTimeout(resolve, 5000))
  return `Current Page: ${slug}`
})

function NextLink() {
  const id = nanoid();
  return (
    <div>Go to:{" "}
      <Link href={`/${id}`} prefetch>{id}</Link>
    </div>
  )
}
