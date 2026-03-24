import React, {type ReactNode} from 'react';

interface StepProps {
  title: string;
  children: ReactNode;
}

// Step is a data-carrier component — it renders nothing directly.
// StepsContainer reads its props to build the numbered list.
function Step(_props: StepProps) {
  return null;
}

interface StepsProps {
  children: ReactNode;
}

function StepsContainer({children}: StepsProps) {
  const validSteps = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<StepProps> =>
      React.isValidElement(child) && child.type === Step,
  );

  return (
    <div className="my-6">
      {validSteps.map((step, index) => (
        <div key={index} className="flex gap-4 pb-6 last:pb-0">
          {/* Number and connector line */}
          <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--ifm-color-primary)] text-white text-sm font-semibold">
              {index + 1}
            </div>
            {index < validSteps.length - 1 && (
              <div className="w-px flex-1 bg-[var(--sl-border-color)] mt-2" />
            )}
          </div>
          {/* Content */}
          <div className="pt-1 pb-2 min-w-0 flex-1">
            <h4 className="font-heading font-semibold text-base mb-2 text-[var(--sl-text-primary)]">
              {step.props.title}
            </h4>
            <div className="text-sm text-[var(--sl-text-secondary)] leading-relaxed">
              {step.props.children}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

StepsContainer.Step = Step;
export default StepsContainer;
