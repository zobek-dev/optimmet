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
      {page && page > 0 ? (
        <nav className="my-20">
          <ul className="flex w-max gap-x-4 mx-auto">
            <li>
              <button onClick={() => setPage(page - 1)} disabled={page <= 1 ? true : false}>
                prev
              </button>
            </li>
               
            {page && page < total ? (
                <li>
                  <button onClick={() => setPage(page + 1)} disabled={page < total ? false : true}>
                    next
                  </button>
                </li>
              ): (
                ''
              )
            }
          </ul>
        </nav>
      ):(
       ''   
      )}
    </>
    
  )
} 