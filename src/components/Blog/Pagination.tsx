import { Dispatch, SetStateAction } from "react";

interface Props {
  total: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}
export const Pagination = ({ total, page, setPage }: Props) => {
  //loading
  const list = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <>
      {total && total > 1 ? (
        <nav className="my-20">
          <ul className="flex w-max gap-x-2 mx-auto">
            <li>
              <button
                onClick={() => setPage(page - 1)}
                disabled={page <= 1 ? true : false}
                className={`px-2 py-2 ${
                  page <= 1
                    ? "border border-gray-500"
                    : "border border-[#62CFF4]"
                }`}
              >
                <svg
                  className="w-3 h-3 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                  />
                </svg>
                <span className="sr-only">Anterior</span>
              </button>
            </li>
            {list &&
              list.map((num) => (
                <li key={num}>
                  <button
                    disabled={num == page ? true : false}
                    onClick={() => setPage(num)}
                    className={`px-2.5 py-1.5 leading-[1.1] text-sm ${
                      page != num
                        ? "border border-gray-500"
                        : "border border-[#62CFF4]"
                    }`}
                  >
                    {num}
                  </button>
                </li>
              ))}
            <li>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page < total ? false : true}
                className={` px-2 py-2 ${
                  page < total
                    ? "border border-[#62CFF4]"
                    : "border border-gray-500"
                }`}
              >
                <svg
                  className="w-3 h-3 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 8 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                  />
                </svg>
                <span className="sr-only">Siguiente</span>
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
};
