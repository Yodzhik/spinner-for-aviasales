import styles from './Spinner.module.css';

interface SpinnerProps {
    spinnerImage: string;
}

const Spinner = ({ spinnerImage }: SpinnerProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.cardsContainer}>
                {[1, 2, 3, 4].map((i) => (
                    <div className={styles.card} key={i}>
                        <img
                            src={spinnerImage}
                            alt={`Airplane segment ${i}`}
                            className={styles.cardAirplane}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Spinner;