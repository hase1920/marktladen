import React, {useState,useEffect} from 'react'
import {useTheme} from '../components/Theming'
import Container from '../components/Container'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styled from '@emotion/styled'
import {keyframes,css} from '@emotion/core'
import {Dialog} from '@reach/dialog'
import {FaArrowRight,FaArrowLeft, FaWindowClose} from 'react-icons/fa'
import './styles.css'
let myInterval=null
//import Img from 'gatsby-image'
const MyButton = styled.button`
background: white;
border: 1px grey;
padding:5px;
outline:none;
margin:5px 3px;
color:black;
:hover {
  background:grey;
  outline:none
}

`
const MyData=({data})=> {
  const theme = useTheme()
  const[selectedImg,setSelectedImg]=useState(null)
  const[selected,setSelected]=useState(false)
  const[dasImg,setImg]=useState(parseInt(0))
  const[dasArr,setDasArr]= useState(null)
  const[diashow,setDiashow]= useState(false)
  //const site = data.site
  const daten = data.theater.nodes
   let zaehler=1;
   useEffect(() => {
    function los(){
      let mdat=[]
       daten.map(item => {
         let b=item.relativePath.split('.')
         let arr= parseInt(b[0])
         
         console.log(arr+ " arr")
         return mdat.push({relativePath:item.relativePath,childImageSharp:item.childImageSharp,id:arr}) 
       })
      mdat.sort((a,b) => (parseInt(a.id) > parseInt(b.id)) ? 1: -1)
     
      setDasArr(mdat)
      
    }
     los()
  },[daten])
  
  useEffect(()=>{
   
  },[dasImg])
   
   function stoppen()
   {
    clearInterval(myInterval);
    setDiashow(false)
}  
  function mach(item) {
    if(myInterval) clearInterval(myInterval)
    setSelectedImg(item)
    setSelected(!selected)
    console.log(item.id + ' item.id')
    setImg(item.id-1)
    //console.log(item.id+ "  "+ dasArr.length)
    if(item.id>dasArr.length) schliessen()
   
  }
function schliessen(){
  setSelected(false);
  setDiashow(false)
  clearInterval(myInterval)

}
function mlinks(){
  
  
  let z=selectedImg.id
  z=parseInt(z)
  z=z-2
  if(z<0) return
  setImg(z)
  console.log("links")
  return setSelectedImg(dasArr[z])
  
  
}
function rechts(){
 
 // if(dasImg===0) return setSelectedImg(dasArr[0])
  console.log("rechts")
  let z=selectedImg.id
  z=parseInt(z)
  console.log(z +" in rechts")
  if(z>=dasArr.length) return
  setImg(z)
 
  return setSelectedImg(dasArr[z])
}
   function timing(){
     setDiashow(true)
     setSelectedImg(dasArr[0])
     zaehler=1;
     setImg(0)
     myInterval = setInterval(function(){ 
         console.log("ich mach w")
       
        if(zaehler<dasArr.length){
          setImg(zaehler)
          setSelectedImg(dasArr[zaehler++])
        } 
        else{
          clearInterval(myInterval)
          schliessen()
        } 
        
    },3000)
   }
    
  return dasArr && (
    <div>
    <div css={css`
      display: flex;
      flex-wrap:wrap;
      width:90%;
      
     
      justify-content: flex-start;
      align-item:center;
      padding:20px 0;
      margin-left:100px;
      @media(max-width:800px){
        margin-left:20px;
      }
      
    `}>
        {dasArr.map((item,index) => {
          return(
            <MyDiv css={css`
            width:17%;
            margin:1px;
           
            `}  key={index}>
              <button onClick={()=>mach(item)}
               css={css`
                padding:0;
                margin:0;
                background:none;
                border:none;
                  :hover {
                    background: ${theme.colors.white};
                    border: none;
                    outline:none;
                    color:gray;
                  }
                 .selected {
                   outline:none;
                 } 
               `}
              >
              <img alt="Bild vom Theaterfestival" srcSet={item.childImageSharp.fluid.srcSet} />
              </button>
            </MyDiv>
          )
        })}
      
    </div>
    {selected &&
    
     <Dialog aria-label="Dialog">
       
       <img alt="Bild vom Theaterfestival"  srcSet={selectedImg.childImageSharp.fluid.srcSet} />
  
       <div css={css`
         display:flex;
         width:100%;
         justify-content:space-between;
        
         overflow:hidden;
         padding:0 20px;
         height:60px;
         a {
           outline:none;
           padding: 0 30px;
         }
         
       `}>
        
       <MyButton aria-label="Click" onClick={()=>schliessen()}>close</MyButton>
       <MyButton aria-label="Click" onClick={()=> mlinks()}><FaArrowLeft /></MyButton>
      
       <MyButton aria-label="Click" onClick={()=> rechts()}><FaArrowRight /></MyButton>
       {diashow ?
       <MyButton aria-label="Click" onClick={()=> stoppen()}><FaWindowClose /> </MyButton>
        : 
        <MyButton aria-label="Click" onClick={()=> timing()}>Diashow</MyButton>
      
      }
    {zaehler>0 && 
      
    <div style={{
      display:'flex',
      width:'100%',
      justifyContent:'flex-end',
      border:'1px red grey',
      height:15,margin:'-20px auto 0 auto'}}>
      <span style={{padding:'0 10px'}}> Theaterfestival  </span><br/>
      {dasImg+1} / {daten.length}</div>
      } 
    </div>
    
     
     </Dialog>
     
    }
    </div>
  )
 
}

const slidein = keyframes`
    0% {
      opacity:0
    }
   
    99% {
      opacity:1;
    }
  }`
  const MyDiv = styled("div")`
 animation: ${slidein} 1s ease;
`
const Aktuell = () => {
    const theme = useTheme()
    
    const data = useStaticQuery(graphql`
    
    query {
        site {
          ...site
          siteMetadata {
            title
          }
        }
        theater: allFile (sort:{fields:relativePath},filter: {sourceInstanceName: {eq: "theater"}}){
          nodes {
           relativePath
           childImageSharp {
            fluid (maxWidth: 900) {
             srcSet
            }
           } 
          
           
         }
         }
    }
    `)
    return(
        <Layout site={data.site}>
         <MyData data={data} />
         <Hero 
          titel="Aktuell..."
          text="Bacharach ist gestorben"
         />
     
        <Container>
          <MyDiv>
          <h1 style={{fontSize:theme.fontsizes.great}}>
        Markt 1
     </h1>
     <p>verantwortlich:<br/>Verschönerungsverein</p>
     
     </MyDiv>
        </Container>
        </Layout>
     
    )
}

export default Aktuell