interface CodeSnippetProps {
    data: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({data}) => {
    return (
        <div className="bg-gray-900 rounded-lg my-3">
            <pre className="bg-gray-800 text-gray-200 p-6 rounded-lg text-sm font-mono">
                <code>
                    {data}
                </code>
            </pre>
        </div>
    );
};

export default CodeSnippet;