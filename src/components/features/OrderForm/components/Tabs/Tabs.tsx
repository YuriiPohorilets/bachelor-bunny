import clsx from 'clsx';
import { motion } from 'motion/react';
import styles from './Tabs.module.scss';

const tabsList = [
  { id: 'order_tab-00', label: 'Personal data', steps: [0] },
  { id: 'order_tab-01', label: 'Food preferences', steps: [1, 2] },
  { id: 'order_tab-02', label: 'Restrictions', steps: [3] },
  { id: 'order_tab-03', label: 'For delivery', steps: [4] },
];

interface TabsProps {
  currentStep: number;
}

export const Tabs: React.FC<TabsProps> = ({ currentStep }) => {
  return (
    <ul className={styles.list}>
      {tabsList.map(({ id, label, steps }) => (
        <motion.li
          key={id}
          className={clsx(styles.item, steps.includes(currentStep) && styles.active)}
        >
          {label}
          {steps.includes(currentStep) ? (
            <motion.div
              layoutId="tab_underline"
              id="tab_underline"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={clsx(styles.underline, styles[`step--${currentStep}`])}
            />
          ) : null}
        </motion.li>
      ))}
    </ul>
  );
};
