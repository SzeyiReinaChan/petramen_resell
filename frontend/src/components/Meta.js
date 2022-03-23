import React from "react"
import { Helmet } from "react-helmet"

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Welcome to PetRamen",
  description: "Selling the best ramen in the world",
  keywords: "ramen, cheap ramen, worldwide ramen",
}

export default Meta