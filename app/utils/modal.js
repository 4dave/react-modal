export default function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      {/* <div className="sm:w-[600px] w-[90%] flex flex-col"> */}
      <div className="px-2 sm:w-[600px] w-full flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  )
}
