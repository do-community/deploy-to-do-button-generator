import Highlight, { defaultProps } from "prism-react-renderer";
import CopyButton from "./CopyButton";
import json2yaml from "json2yaml";

export default function YamlViewer({ data }) {
  const yaml = json2yaml.stringify(data);

  return (
    <Highlight {...defaultProps} code={yaml} language="yaml">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} relative rounded-lg leading-relaxed text-sm`}
          style={style}
        >
          <div className="bg-blue-900 text-blue-300 font-mono rounded-t-lg py-4 px-6">
            .do/deploy.template.yaml
          </div>

          {/* copy button here */}
          <CopyButton text={yaml} />

          {/* display the yaml here */}
          <div className="p-10">
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </div>
        </pre>
      )}
    </Highlight>
  );
}
