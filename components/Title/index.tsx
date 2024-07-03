import { TitleProps } from './type'

function Title({ text }: TitleProps) {
  return (
    <h1 className="container mb-8 inline-block border border-transparent border-[#292a7c] font-bold uppercase break-words md:text-4xl sm:text-xl">
      {text}
    </h1>
  )
}

export default Title
