type ProgressBarProps = {
  progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="flex items-center mt-1">
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>

      <p className="text-sm text-gray-600 ml-2">{progress.toFixed(0)}%</p>
    </div>
  )
}

export default ProgressBar
