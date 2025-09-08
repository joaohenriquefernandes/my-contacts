import { useState } from "react";
import { useErrors } from "../hooks/useErrors";
import { isEmailValid } from "../utils/isEmailValid";
import { Button } from "./Button";
import { FormGroup } from "./FormGroup";
import { Input } from "./Input";
import { Select } from "./Select";

interface ContactFormProps {
  buttonLabel: string
}

export function ContactForm({buttonLabel}: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')
  const {getErrorMessageByFieldName, removeError, setError} = useErrors()

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
    if(!event.target.value) {
      setError({field: 'name', message: 'Nome é obrigatório'})
    } else {
      removeError('name')
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
    if(event.target.value && !isEmailValid(event.target.value)) {
      setError({field: 'email', message: 'Email inválido.'})
    } else {
      removeError('email')
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={!!getErrorMessageByFieldName('name')}
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={!!getErrorMessageByFieldName('email')}
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>
      <Button
        type="submit"
        className="w-full bg-ultramarine-blue hover:bg-very-light-blue active:bg-palatinate-blue"
      >
        {buttonLabel}
      </Button>
    </form>
  )
}
