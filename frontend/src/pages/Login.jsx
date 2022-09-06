import Input from '../components/Input'

export default function Login() {
  return (
    <div>
      <Input label="CPF" type="number" name="CPF" placeholder="Digite seu CPF" onChange />
    </div>
  )
}
