import { Grid } from "@chakra-ui/react"
import React from "react"
import CatsCard from "../CatsCard/CatsCard"
import CustomLink from "../CustomLink/CustomLink"

const CatsGrid = ({ cats }) => {
  const handleLike = (e) => {
    e.preventDefault()
  }

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={"40px"}
    >
      {cats.map(({ name, _id, image }) => {
        return (
          <CustomLink key={_id} to={`/cats/${_id}`}>
            <CatsCard
              key={_id}
              name={name}
              image={image}
              handleLike={handleLike}
            />
          </CustomLink>
        )
      })}
    </Grid>
  )
}

export default CatsGrid
