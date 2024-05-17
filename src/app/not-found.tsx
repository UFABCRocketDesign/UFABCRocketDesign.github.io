import Image from 'next/image';
import styles from '../styles/404.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    description: 'Where\'s the One Piece?',
}


export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.textBox}>
                    <h1 className="mb-3">404 - Page Not Found</h1>
                </div>

            </div>
        </div>

    );
}