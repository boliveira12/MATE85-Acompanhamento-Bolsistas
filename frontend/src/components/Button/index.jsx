export default function Button({ children, type, icon, color, onClick, disabled }) {
  const handleClick = (e) => {
    onClick(e)
  }

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={handleClick}
      disabled={disabled}
      className={`${
        color === 'green' ? `bg-green-500 hover:bg-green-800` : 'bg-blue-500 hover:bg-blue-800'
      } flex h-12 w-full max-w-[395px] items-center justify-center rounded-lg text-base font-semibold leading-6 text-white transition-colors duration-300 ease-in disabled:cursor-not-allowed disabled:bg-gray-400`}
    >
      {icon && <img src={`/assets/icons/${icon}.svg`} alt="Icon" className="mr-2 text-white" />}
      {children}
    </button>
  )
}
