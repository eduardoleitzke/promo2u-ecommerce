
import Header from "../components/header/Header"
import Search from "../components/search/Search"
import { products } from "../db/products"
import { HomeContainer} from "../styles/pages/home"
import Products from "../components/products/Products"

export default function Home() {
  return (
    <>
      <Header></Header>
      <Search/>
      <HomeContainer>
        {products.map((product) =>{
          return(
            <Products product={product} key={product.id} />
          )
        })}
      </HomeContainer>
    </>  
  )
}
