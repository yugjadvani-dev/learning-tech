"use client"

import { SetStateAction, useState } from "react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Pagination } from "@/components/ui/pagination"

export default function Faq() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(12)
  const faqs = [
    {
      id: 1,
      question: "What is the purpose of this website?",
      answer:
        "This website is a clone of Stack Overflow, a popular question and answer platform for developers and programmers. It allows users to ask questions, provide answers, and engage in discussions around various programming-related topics.",
    },
    {
      id: 2,
      question: "How do I ask a question?",
      answer:
        'To ask a question, simply click on the "Ask Question" button at the top of the page. You will be prompted to provide a title, tags, and the details of your question. Be sure to provide as much information as possible to help others understand and answer your question effectively.',
    },
    {
      id: 3,
      question: "How do I earn reputation points?",
      answer:
        "You can earn reputation points by having your questions and answers upvoted by other users. The more upvotes your content receives, the more reputation points you will earn. You can also earn reputation points by completing certain actions, such as accepting an answer to your question or participating in the community.",
    },
    {
      id: 4,
      question: "What are the different user roles on this website?",
      answer:
        "There are several user roles on this website, including regular users, moderators, and administrators. Regular users can ask questions, provide answers, and engage in discussions. Moderators have additional privileges, such as the ability to edit and delete content, as well as ban users. Administrators have the highest level of control and can manage the overall operation of the website.",
    },
    {
      id: 5,
      question: "How do I report a problem or issue with the website?",
      answer:
        'If you encounter any problems or issues with the website, you can report them by clicking on the "Report" button at the bottom of the page. This will allow you to provide details about the issue and submit it for review by the website\'s administrators.',
    },
    {
      id: 6,
      question: "What is the difference between a question and an answer?",
      answer:
        "A question is a problem or inquiry that a user posts, seeking help or information from the community. An answer is a response provided by another user, attempting to solve the problem or provide the requested information.",
    },
    {
      id: 7,
      question: "How do I format my code in a question or answer?",
      answer:
        "To format your code, you can use the code formatting tools provided on the website. This will ensure that your code is displayed in a clear and readable manner, making it easier for others to understand and provide feedback.",
    },
    {
      id: 8,
      question: "Can I edit my question or answer after posting it?",
      answer:
        "Yes, you can edit your question or answer after posting it. This allows you to correct any mistakes, provide additional information, or clarify your original post.",
    },
    {
      id: 9,
      question: "How do I upvote or downvote a question or answer?",
      answer:
        "To upvote or downvote a question or answer, simply click on the up or down arrow next to the content. Upvotes help to promote high-quality content, while downvotes can help to identify low-quality or irrelevant content.",
    },
    {
      id: 10,
      question: "What is the purpose of tags on this website?",
      answer:
        "Tags are used to categorize and organize questions on the website. They help users to find relevant content and allow the community to easily identify the topics or technologies being discussed.",
    },
    {
      id: 11,
      question: "How do I subscribe to a specific tag or topic?",
      answer:
        'To subscribe to a specific tag or topic, you can click on the "Subscribe" button next to the tag or topic you\'re interested in. This will notify you whenever new questions or answers are posted related to that tag or topic.',
    },
    {
      id: 12,
      question: "Can I delete my own question or answer?",
      answer:
        "Yes, you can delete your own question or answer, but only within a certain time frame. After that, the content will be locked and can only be deleted by moderators or administrators.",
    },
    {
      id: 13,
      question: 'What is the purpose of the "Favorite" feature?',
      answer:
        'The "Favorite" feature allows you to mark questions or answers as favorites, which can be useful for quickly accessing content you find particularly helpful or interesting.',
    },
    {
      id: 14,
      question: "How do I contact the website administrators?",
      answer:
        'To contact the website administrators, you can use the "Contact Us" form located in the footer of the website. This will allow you to submit any questions, feedback, or concerns you may have.',
    },
    {
      id: 15,
      question: "Can I earn badges or achievements on this website?",
      answer:
        "Yes, you can earn various badges and achievements on the website by completing certain actions or reaching certain milestones. These badges are displayed on your user profile and can be a source of pride and recognition within the community.",
    },
    {
      id: 16,
      question: "How do I view my profile and activity history?",
      answer:
        "To view your profile and activity history, simply click on your username in the top right corner of the website. This will take you to your user profile, where you can see your questions, answers, reputation, and other relevant information.",
    },
    {
      id: 17,
      question: 'What is the purpose of the "Bounty" feature?',
      answer:
        'The "Bounty" feature allows users to offer a reward (in the form of reputation points) for questions that are particularly difficult or important. This can help to incentivize the community to provide high-quality answers to these questions.',
    },
    {
      id: 18,
      question: "How do I participate in the community discussions?",
      answer:
        "To participate in the community discussions, you can comment on questions or answers, engage in the forums, or join in on the chat rooms. This allows you to share your knowledge, ask for help, and connect with other members of the community.",
    },
    {
      id: 19,
      question: 'What is the purpose of the "Review" queue?',
      answer:
        'The "Review" queue is a feature that allows moderators and experienced users to review and approve or reject various types of content, such as suggested edits, close votes, and low-quality posts. This helps to maintain the quality and integrity of the website.',
    },
    {
      id: 20,
      question: "How do I become a moderator on this website?",
      answer:
        "To become a moderator, you must demonstrate a strong commitment to the community, a deep understanding of the website's policies and guidelines, and a history of providing high-quality contributions. Moderators are typically selected by the website administrators based on their demonstrated leadership and dedication.",
    },
    {
      id: 21,
      question: 'What is the purpose of the "Careers" section on this website?',
      answer:
        'The "Careers" section of the website allows users to search for and apply to job opportunities related to the topics and technologies discussed on the platform. This can be a valuable resource for developers and programmers looking to advance their careers.',
    },
    {
      id: 22,
      question: "How do I participate in the website's translation efforts?",
      answer:
        'To participate in the website\'s translation efforts, you can visit the "Translate" section of the website and contribute translations for the content in your native language. This helps to make the website accessible to a global audience.',
    },
  ]
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const indexOfLastFaq = currentPage * usersPerPage
  const indexOfFirstFaq = indexOfLastFaq - usersPerPage
  const currentFaqs = filteredFaqs.slice(indexOfFirstFaq, indexOfLastFaq)
  const totalPages = Math.ceil(filteredFaqs.length / usersPerPage)
  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
      <div className="space-y-4">
        {currentFaqs.map((faq) => (
          <Accordion key={faq.id} type="single" collapsible>
            <AccordionItem value={`faq-${faq.id}`}>
              <AccordionTrigger className="text-lg font-bold">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}
