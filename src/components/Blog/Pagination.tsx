import { Dispatch, SetStateAction } from "react"

interface Props{
  total: number,
  page: number,
  setPage: Dispatch<SetStateAction<number>>
}
export const Pagination = ({total, page, setPage}: Props) => {
  // console.log(total, page)
 //const numbers = [];
  
  // for(let i = 1; i++; i==total){
  //   numbers.push(i); 
  //   console.log(numbers) 
  // }
  return (
    <>
      {total && total > 1 ? (
        <nav className="my-20">
          <ul className="flex w-max gap-x-1 mx-auto">
            <li>
              <button onClick={() => setPage(page - 1)} disabled={page <= 1 ? true : false} className={`border border-[#62CFF4] px-2 py-2 ${page <= 1 ? 'border border-gray-500' : 'border border-[#62CFF4]'}`}>
                prev
              </button>
            </li>
            <li>
              <button onClick={() => setPage(page + 1)} disabled={page < total ? false : true} className={` px-2 py-2 ${page < total ? 'border border-[#62CFF4]' : 'border border-gray-500'}`}>
                next
              </button>
            </li>
          </ul>
        </nav>
      ):(
       ''   
      )}
    </>
    
  )
} 