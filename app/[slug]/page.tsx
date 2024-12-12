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
    <div className="flex flex-col gap-4">
      <div>{title}</div>
      <NextLink />
    </div>
  )
}

const fetchTitle = cache(async function fetchTitle(slug: string) {
  "use cache"
  await new Promise(resolve => setTimeout(resolve, 5000))
  return `Params: ${slug}`
})

async function NextLink() {
  "use cache";
  const id = nanoid();
  return (
    <Link href={`/${id}`} prefetch>Go to {id}</Link>
  )
}
