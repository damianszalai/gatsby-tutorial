import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
{
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childrenImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: true}
            width: 200
            height: 200
          )
        }
      }
    }
  }
`
const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  console.log(nodes)
  return (
      <Wrapper>
      {nodes.map((node, index) => {
          const { name } = node
          console.log(node);
       const pathImg = getImage(node.childrenImageSharp[0])
        console.log(node)
        return (
          <article key={index}>
            <GatsbyImage
              image={pathImg}
              alt={name}
            />
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  > article > div {
    text-align: center;
    margin: auto;
    img {
      border-radius: 1rem;
    }
  }
  p {
    text-align: center;
  }
`

export default Gallery
