type BoxData = {
  value: string,
  onBoxClick: unknown
}
const Box = ({value, onBoxClick}: BoxData) => {
  return (
    <button 
      className="w-[110px] h-[110px] border border-black hover:scale-105 cursor-pointer text-[60px] leading-none"
      onClick={onBoxClick}
    >
      {value}
    </button>
  )
}

export default Box