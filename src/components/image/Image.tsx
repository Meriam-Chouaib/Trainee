interface ImageProps{
    src:string;
    alt:string;
    width:number;
    height:number;
}
export const  Image = ({src,alt,width,height}:ImageProps) => {
  return (
    <img src={src} alt={alt} width={width} height={height}/>
  )
}
