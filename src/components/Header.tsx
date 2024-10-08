import { CheckCheck, NotebookPen } from "lucide-react";

export default function Header() {
  return (
    <div>
    <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
    >
      <NotebookPen className="w-6 h-6"/>
        
        <input
            type="text"
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
            type="submit"
            className="appearance-none w-8 h-8 bg-[url('./assets/plus.png')] bg-no-repeat bg-contain"
        ></button>
    </form>

    <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <CheckCheck className="w-4 h-4"/>
            
            <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer">Clear completed</li>
    </ul>
</div>
  )
}
