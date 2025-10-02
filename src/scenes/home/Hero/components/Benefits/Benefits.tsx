import styles from './Benefits.module.scss';

const benefits = [
  { id: 'benefit-01', text: 'Personalized\n menu' },
  { id: 'benefit-02', text: 'Convenient\n delivery' },
  { id: 'benefit-03', text: 'High-quality\n ingredients' },
  { id: 'benefit-04', text: 'Individualized\n service' },
  { id: 'benefit-05', text: 'Customer\n trust' },
];

export const Benefits: React.FC = () => {
  return (
    <ul className={styles.benefits}>
      {benefits.map(({ id, text }) => (
        <li key={id} className={styles.benefit}>
          {text}
        </li>
      ))}
    </ul>
  );
};
