import { Button } from "./Button";
import { FormGroup } from "./FormGroup";
import { Input } from "./Input";
import { Select } from "./Select";

interface ContactFormProps {
  buttonLabel: string
}

export function ContactForm({buttonLabel}: ContactFormProps) {
  return (
    <form className="space-y-4">
      <FormGroup error="O formato do e-mail é inválido">
        <Input placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>
      <Button type="submit" className="w-full bg-ultramarine-blue hover:bg-very-light-blue active:bg-palatinate-blue">
        {buttonLabel}
      </Button>
    </form>
  )
}
