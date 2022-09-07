import { useState } from 'react'
import Input from '../components/Input'

export default function Login() {
  const [field, setField] = useState({
    cpf: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setField({ ...field, [name]: value })
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div role="img" className="bg-sky-200 w-6/12 h-screen" />
      <section className="flex flex-col items-center justify-center gap-y-7 w-6/12">
        <img src="/assets/logo.png" alt="Logo" className="max-w-[395px]" />
        <h1 className="text-2xl leading-8 font-semibold text-gray-900">
          Acompanhamento de Bolsistas
        </h1>
        <form className="flex flex-col gap-y-5 w-full max-w-[395px]">
          <Input
            label="CPF"
            type="number"
            name="cpf"
            placeholder="Digite seu CPF"
            handleChange={handleChange}
          />
          <Input
            label="Senha"
            type="text"
            name="password"
            placeholder="Digite sua senha"
            handleChange={handleChange}
          />
          <a
            href="/#"
            className="w-max text-base leading-6 font-normal text-blue-600 hover:text-blue-800 transition-colors"
          >
            Esqueci a senha
          </a>
          <button type="submit">Entrar</button>
        </form>
        <p>
          Ainda não tem uma conta?{' '}
          <a href="/#" className="text-blue-600 hover:text-blue-800 transition-colors">
            Cadastre-se
          </a>
        </p>
      </section>
    </div>
  )
}
