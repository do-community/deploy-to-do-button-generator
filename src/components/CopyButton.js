import { CopyToClipboard } from "react-copy-to-clipboard";

export default function CopyButton({ text }) {
  return (
    <CopyToClipboard text={text} onCopy={() => alert("copied!")}>
      <button className="bg-black hover:bg-gray-900 rounded-lg p-5 absolute top-4 right-4">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
    </CopyToClipboard>
  );
}
