import { useOrderForm } from '@/app/(providers)/form/form-context';
import { Controls, Tabs } from './components';
import styles from './OrderForm.module.scss';

export const OrderForm = () => {
  const { data, setFormValues, step, next, back, reset } = useOrderForm();

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <Tabs currentStep={step.current} />
      </div>

      <form className={styles.form}></form>

      <Controls
        minStep={step.min}
        maxStep={step.max}
        currentStep={step.current}
        onNextStep={next}
        onPrevStep={back}
        onSubmit={() => {}}
      />
    </div>
  );
};
