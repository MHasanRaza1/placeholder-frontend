import { useState } from "react"
import CodeSnippet from "./CodeSnippet"

const Center = () => {
    const [output, setOutput] = useState("{}")
    const showOutput = () => {
        setOutput(`{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}`)
    }
    return (
        <div className="mt-14">
            <h1 className="text-[2.5rem] my-4">Try it</h1>
            <p>Run this code here, in a console or from any site:</p>
            <CodeSnippet
                data={`fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))`} />
            <button
                onClick={showOutput}
                className="py-2 px-5 text-[#fff] bg-black rounded-md my-5 hover:bg-gray-500">Run Script</button>
            <CodeSnippet data={output} />
            <p className="my-5">Congrats! You've made your first call to JSONPlaceholder. 😃 🎉</p>
            <h1 className="text-[2.5rem] mt-14 mb-4">When to use</h1>
            <p className="mb-7">JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.</p>
            <h1 className="text-[2.5rem] mt-14 mb-4">Resources</h1>
            <p>JSONPlaceholder comes with a set of 6 common resources:</p>
            <div className="flex items-center gap-12">
                <ul className="my-4">
                    <li><a href="https://hasan-api.vercel.app/posts" target="_blank">/posts</a></li>
                    <li><a href="https://hasan-api.vercel.app/comments" target="_blank">/comments</a></li>
                    <li><a href="https://hasan-api.vercel.app/albums" target="_blank">/albums</a></li>
                </ul>
                <ul>
                    <li>100 posts</li>
                    <li>500 comments</li>
                    <li>100 albums</li>
                </ul>
            </div>
        </div>
    )
}

export default Center