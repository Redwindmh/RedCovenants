import mainboard from "../../assets//images/board/covenants_board2bg.png"

const MainBoard = () => {
  return (
    <div className="w-3/7">
      <h1 className="text-red-500">Red Covenants</h1>
      <img src={mainboard} alt="board" className="h-auto max-w-full" />
    </div>
  )
}

export default MainBoard
