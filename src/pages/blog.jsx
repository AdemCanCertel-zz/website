import { getAllNodes } from "next-mdx/server"

function BlogPage() {
    return (
      <>
        <h1>Hello ,wrodl1</h1>

      </>
    )
}

export async function getStaticProps() {
    return {
      props: {
        posts: await getAllNodes("post"),
      },
    }
  }

export default BlogPage