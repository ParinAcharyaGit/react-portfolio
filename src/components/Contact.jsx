import {CONTACT} from "../constants"
import { CiMail } from "react-icons/ci";
const Contact = () => {
  return (
    <div className="text-white">
      <h2 className="my-5 text-center text-4xl font-bold">Connect with me</h2>
      <div className="flex items-center justify-center text-center tracking-tighter text-purple-500 text-xl">
        <CiMail className="mr-2" />
        <a href="mailto:acharyaparin05@gmail.com" target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">
            {CONTACT.email}
        </a>
    </div>

    </div>
  )
}

export default Contact
