const Nav = () => {
  return (
    <div className="flex justify-between my-3 items-center">
        <div>
            <h2 className="text-[1.5rem] font-medium cursor-pointer">Hasan Raza</h2>
        </div>
        <ul className="flex gap-2 cursor-pointer">
            <li>Guide</li>
            <li>Sponsor this project</li>
            <li>Blog</li>
            <li>My JSON Server</li>
        </ul>
    </div>
  )
}

export default Nav