import React from 'react'
import styled from 'styled-components'

function About ({
  link,
  image,
  title,
  description,
  rank
}) {
    return (
      <Container>
      <a href={link}>
        <Image src={image} />
      </a>
      <CardBody>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Title>{rank}</Title>
      </CardBody>
    </Container>
    )
}

const Container = styled.div`
  flex: 1;
  flex-basis: 15%;
  margin: 15px;
  border: solid 2px #3a3a3a;
  border-radius: 5px;
`

const CardBody = styled.div`
  padding: 10px;
`

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
`

const Description = styled.p`
  font-size: 12px;
  text-align: center;
`

const Image = styled.img`
  width: 100%;
`

export default About;