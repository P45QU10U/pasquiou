const Bubble = function ({ textColor = 'text-black', bgColor = 'bg-white', children }) {
  return (
    <div className="grid grid-cols-1 grid-rows-1">
      <div className={`bulle ${textColor} z-10`}>{children}</div>
      <div className={`${bgColor} bulle rounded-full`} />
    </div>
  )
}

export default Bubble
