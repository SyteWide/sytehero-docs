import type {WrapperProps} from '@docusaurus/types';
import CodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';

type Props = WrapperProps<typeof CodeBlockType>;

export default function CodeBlockWrapper(props: Props) {
  return (
    <div className="sl-code-block">
      <CodeBlock {...props} />
    </div>
  );
}
