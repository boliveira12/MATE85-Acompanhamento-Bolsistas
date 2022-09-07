import { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Login() {
  const [field, setField] = useState({
    cpf: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setField({ ...field, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(field)
  }

  return (
    <div className="flex h-screen w-full items-center justify-center p-6 md:p-0">
      <div role="img" className="hidden h-screen bg-sky-200 md:block md:w-1/12 lg:w-6/12" />
      <section className="flex w-full flex-col items-center justify-center gap-y-7 md:w-11/12 lg:w-6/12">
        <img src="/assets/logo.png" alt="Logo" className="w-full max-w-[395px]" />
        <h1 className="text-center font-poppins text-2xl font-semibold leading-8 text-gray-900">
          Acompanhamento de Bolsistas
        </h1>
        <form className="flex w-full max-w-[395px] flex-col gap-y-5 font-inter">
          <Input
            label="CPF"
            type="number"
            name="cpf"
            placeholder="Digite seu CPF"
            handleChange={handleChange}
            required
          />
          <Input
            label="Senha"
            type="text"
            name="password"
            placeholder="Digite sua senha"
            handleChange={handleChange}
            required
          />
          <a
            href="/#"
            className="w-max text-base font-normal leading-6 text-blue-600 transition-colors hover:text-blue-800"
          >
            Esqueci a senha
          </a>
          <Button type="submit" onClick={handleSubmit} icon="enter">
            Entrar
          </Button>
        </form>
        <p className="text-center text-base font-normal leading-6">
          Ainda não tem uma conta?{' '}
          <a href="/#" className="text-blue-600 transition-colors hover:text-blue-800">
            Cadastre-se
          </a>
        </p>
      </section>
    </div>
  )
}
