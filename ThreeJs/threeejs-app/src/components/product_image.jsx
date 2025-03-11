import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react"

function ProductImageDisplay(){
    const [index,setIndex] = useState(0);
    const productRef = useRef()
    const hoverRef = useRef(true) //current
    const frameRef = useRef(0) //current 
    
    const productImages = [
        "https://placehold.co/300x200?text=front+view",
        "https://placehold.co/300x200?text=rear+view",
        "https://placehold.co/300x200?text=left+view",
        "https://placehold.co/300x200?text=right+view",
        "https://placehold.co/300x200?text=top+view"
        
    ]
    const texture = 
    useTexture(productImages[index]);
    
//hover = false, index = 0 ----first image is shown 
//hover = true, 0.1,0.2,0.3,0.4,0.5,0.6,
    useFrame(()=>{ //use effect 
         
        if(hoverRef.current){
            frameRef.current = frameRef.current +1; 

            if(frameRef.current > 30){
                setIndex(ci=>(ci+1)%productImages.length)
                frameRef.current = 0
            }
        }
    },[hoverRef.current == true])
    return(
            <mesh ref={productRef} 
            onPointerEnter={()=>hoverRef.current = true}
            onPointerOut={()=>hoverRef.current = false}
            >
                <planeGeometry args={[10,10,1]} />
                <meshStandardMaterial  map={texture}></meshStandardMaterial>
            </mesh>   
    )
}

export default ProductImageDisplay