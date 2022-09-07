export default function Input({ label, type, value, name, placeholder, handleChange, inputRef }) {
  const handleChangeInput = (e) => {
    handleChange(e)
  }

  return (
    <label
      htmlFor={name}
      className="flex flex-col gap-y-1.5 text-lg leading-7 font-medium text-gray-800"
    >
      {label}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChangeInput}
        ref={inputRef}
        className="w-full max-w-[395px] text-base leading-6 font-normal text-gray-800 px-4 py-3 border border-gray-400 placeholder-gray-400::placeholder rounded-lg focus:ring-gray-600 focus:border-transparent valid:border-gray-400  invalid:border-red-500 invalid:text-red-600 focus:outline-none focus:ring-1 focus:valid:border-gray-400  focus:valid:ring-gray-400  focus:invalid:border-red-500 focus:invalid:ring-red-500"
      />
    </label>
  )
}
