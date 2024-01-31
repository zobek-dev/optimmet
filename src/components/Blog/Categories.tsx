import axios from 'axios'

export const Categories = ({ categories, setPosts }: any) => {
  const getCategorizedPosts = async (id: any) => {
    const response = await axios.get(
      `https://optimmet.cl/headless-optimmet/wp-json/wp/v2/posts?_embed&categories=${id}`
    )
    const data = response.data
    setPosts(data)
  }
  return (
    <div className="border border-[#62CFF4] p-5 rounded-tl-xl rounded-br-xl">
      <h3 className="text-2xl font-bold mb-6">Categorías</h3>
      <div className="flex flex-col divide-y divide-[#62CFF4]">
        {categories &&
          categories.map((el: any, index: number) => (
            <button
              key={index}
              className="w-full py-3 text-left hover:text-[#62CFF4]"
              onClick={() => getCategorizedPosts(el.id)}
            >
              {el.name.toUpperCase() == 'UNCATEGORIZED'
                ? 'Sin Categoría'
                : el.name}
            </button>
          ))}
      </div>
    </div>
  )
}

// Uncategorized
