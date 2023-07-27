import { useState } from 'react';

interface Props {
  steps: {
    name: string;
    component: React.ReactNode;
  }[];
}

export default function Stepper({ steps }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = steps.length;

  const previousStep = () => setCurrentStep(step => step - 1);
  const nextStep = () => setCurrentStep(step => step + 1);

  return (
    <section>
      <h2>{steps[currentStep].name}</h2>
      {steps[currentStep].component}
      <hr />
      <button type='button' onClick={previousStep} disabled={currentStep === 0}>
        Previous
      </button>
      <button type='button' onClick={nextStep} disabled={currentStep === totalSteps - 1}>
        Next
      </button>
    </section>
  );
}
