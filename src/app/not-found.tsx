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
                    <p className="mb-4">Sentimos muito, mas o One Piece não está aqui.</p>
                </div>

                <Image src="/images/Roger.webp" alt=""
                    width={500}
                    height={1500}
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "2rem",
                        flex: "1 0 0%",
                        margin: "1rem !important",
                        overflow: "hidden",
                    }}
                />

            </div>
        </div>

    );
}