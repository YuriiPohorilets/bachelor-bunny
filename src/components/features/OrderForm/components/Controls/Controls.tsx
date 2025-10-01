import { AnimatePresence, motion } from 'motion/react';
import { ArrowIcon } from '@/components/icons';
import { FormButton, IconWrapper } from '@/components/ui';
import styles from './Controls.module.scss';

interface ControlsProps {
  currentStep: number;
  minStep: number;
  maxStep: number;
  onNextStep: () => void;
  onPrevStep: () => void;
  onSubmit: () => void;
}

export const Controls: React.FC<ControlsProps> = ({
  currentStep,
  minStep,
  maxStep,
  onNextStep,
  onPrevStep,
  onSubmit,
}) => {
  const isFirstStep = currentStep === minStep;
  const isLastStep = currentStep === maxStep;

  return (
    <div className={styles.controls}>
      <motion.div
        animate={isFirstStep ? { opacity: 0, x: '-100%' } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <FormButton
          disabled={isFirstStep}
          renderIconStart={() => <IconWrapper Icon={ArrowIcon} className={styles.prevIcon} />}
          onClick={onPrevStep}
        >
          Back
        </FormButton>
      </motion.div>

      <AnimatePresence mode="wait">
        {isLastStep ? (
          <motion.div
            key={String(isLastStep)}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <FormButton type="button" renderIconEnd={() => <ArrowIcon />} onClick={onSubmit}>
              Place an order
            </FormButton>
          </motion.div>
        ) : (
          <motion.div
            key={String(isLastStep)}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <FormButton type="button" renderIconEnd={() => <ArrowIcon />} onClick={onNextStep}>
              Next
            </FormButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
