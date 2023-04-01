export const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="flex justify-between items-center">
          <div>
            logo
          </div>
          <div>
            <nav className="hidden lg:block">
              navigation
            </nav>
            <button className="block lg:hidden">
              mobile-nav
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}