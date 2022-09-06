export default function Input({ label, type, value, name, placeholder, onChange }) {
  return (
    <label htmlFor={name}>
      {label}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        value={value ?? ''}
        name={name}
        onChange={onChange}
      />
    </label>
  )
}
