import { FC } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Ad } from '../../model/types'
import { Details } from './forms/Details'
import { AddPhoto } from './forms/AddPhoto'
import { Description } from './forms/Description'
import { AutoContinue } from './forms/AutoContinue'
import { Location } from './forms/Location'
import { ContactDetails } from './forms/ContactDetails'
import { Submit } from './forms/Submit'

export const AdsCreate: FC = () => {
  const methods = useForm<Ad>({})
  const { handleSubmit, reset } = methods

  const handleFormSubmit = (data: Ad) => {
    console.log(data)
    reset()
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex mt w-320 flex-col gap-4"
      >
        <Details />
        <AddPhoto />
        <Description />
        <AutoContinue />
        <Location />
        <ContactDetails />
        <Submit />
      </form>
    </FormProvider>
  )
}
