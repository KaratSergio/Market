import { FC, useState } from 'react'
import { Dropdown } from '@shared/index'

const faqData = [
  {
    question: 'How do I place an ad?',
    answer:
      'By clicking the "Add Ad" button, go to the section and create your ad.',
  },
  {
    question: 'Are money transfers on the platform safe?',
    answer: 'Yes, we use secure payment methods to protect transactions.',
  },
  {
    question: 'Can I sell only new or used items too?',
    answer: 'You can sell both new and used items on our platform.',
  },
  {
    question: 'Problems with payment, what to do?',
    answer: 'Contact our support team for assistance with payment issues.',
  },
  {
    question: "Can I place an ad if I don't have an individual entrepreneur?",
    answer: 'Yes, private individuals can also post ads.',
  },
  {
    question: 'What percentage does the platform take?',
    answer: 'The platform takes a small commission depending on the category.',
  },
]

export const FAQSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="mt-20 h-[660px] w-full max-w-6xl p-6">
      <h2 className="p-4 text-start text-3xl font-bold text-gray-900">
        Popular Questions
      </h2>
      <p className="mb-6 pl-4 text-start text-gray-500">
        Frequently asked questions from our users
      </p>
      <div className="space-y-4 text-start text-sm text-gray-900 sm:text-lg">
        {faqData.map((faq, index) => (
          <Dropdown
            key={index}
            label={faq.question}
            content={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  )
}
