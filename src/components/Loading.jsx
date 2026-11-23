

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-75 gap-5">
      <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-red-500 animate-spin"></div>

      <div className="text-xl font-bold text-gray-700">
        Yükleniyor...
      </div>
    </div>
  )
}

export default Loading