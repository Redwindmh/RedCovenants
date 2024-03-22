import pieces from "../../assets/images/pieces/covenants pieces.png"

const ReadyPlayerOne = () => {
  return (
    <div className="w-1/3">
      <h2 className="text-red-500">Player One</h2>
      <img src={pieces} alt="pieces" />
    </div>
  )
}

export default ReadyPlayerOne
