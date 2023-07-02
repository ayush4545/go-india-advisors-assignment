
const SectorLabel = ({ label, color, width, height, fontsize, mediumFontSize }) => {
     console.log(color)
     return (
          <div className={`rounded-full px-3 py-1 xl:${width} xl:${height} text-white xl:${fontsize}  flex items-center justify-center ${color === 'bg-green-500' ? 'bg-green-500' : color === "bg-blue-500" ? "bg-blue-500" : color}  mr-1 xl:mr-0 ${mediumFontSize}`}>{label}</div>
     )
}

export default SectorLabel