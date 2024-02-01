
import { getCollections } from "@/services/shopify/getCollections"
import Link from "next/link"
import styles from './storeLayout.module.scss'

interface Collection {
  id: string
  handle: string
  title: string
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()
  return (
    <main className={styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
        {collections.map((collection: Collection) => (
          <Link href={`/store/${collection.handle}`} key={collection.id} className={styles.StoreLayout__chip}>
            {collection.title}
          </Link>
        ))}
        </ul>
      </nav>
      {children}
    </main>
  )
}