import { IProduct } from "@/src/@types/props";
import Image from "next/image";
import { ProductContainer } from "./styles";


export default function Products({product}:IProduct){
    return(
        <ProductContainer href={`/produto/${product.id}`} key={product.id}>
              <Image src={`/${product.image}`} width={320} height={240} alt=''/>
              <p>{product.name}</p>
              {product.promotionPrice < product.price ? 
              (
                <div>
                  <span>
                   
                    <s>{`R$ ${String(product.price)},00`}</s> 
                    <p> por </p> 
                    {`R$ ${String(product.promotionPrice)},00`}
                  </span>
                  <p>{`ou 10x de R$ ${String(((product.promotionPrice/10)+(1*product.promotionPrice)/100).toFixed(2)).replace(/\./g, ',')}`}</p>
                </div>
              )
              :
              (
                <div>
                  <span>{`R$ ${String(product.price)},00`}</span>
                  <p>{` ou 10x de R$ ${String(((product.price/10)+(1*product.price)/100).toFixed(2)).replace(/\./g, ',')}`}</p>
                </div>
                
)}
            </ProductContainer>
    )
}
