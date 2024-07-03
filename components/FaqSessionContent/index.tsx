import { FaqSessionContentProps } from './types'

const FaqSessionContent = ({ content }: FaqSessionContentProps) => (
  <p className="mb-6 mt-4 animate-faq px-4 text-base leading-8 break-words transition-all">
    {content}
  </p>
)

export default FaqSessionContent
