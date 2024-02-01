import { ProductsWrapper } from "@/components/store/ProductsWrapper"
import { getCollectionProducts, getCollections } from "@/services/shopify/getCollections"
import { getProducts } from "@/services/shopify/getProducts"

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

interface Collection {
  id: string
  handle: string
}

export default async function Category(props: CategoryProps){
  const { categories } = props.params
  let products = []

  const collection = await getCollections()

   if(categories?.length > 0){
    const selectedCollectionId = collection.find((collection: Collection) => collection.handle === categories[0]).id
    products = await getCollectionProducts(selectedCollectionId)
  } else {
    products = await getProducts()
  }

  // throw new Error('Error: boom')
  return(
    <ProductsWrapper products={products}/>
  )
}