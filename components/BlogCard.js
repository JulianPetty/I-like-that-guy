// BlogCard.js
import Link from "next/link";
import styles from '../styles/BlogCard.module.css';

export default function BlogPost({ title, author, coverPhoto, datePublished, slug, preview }) {
    return (
        <div className={`${styles.card} group`}>
            <Link href={'/posts/' + slug}>
                <div className={`${styles.imgContainer} relative`}>
                    <img
                        src={coverPhoto.url}
                        alt={title}
                        className={styles.img}
                    />
                    {/* Overlay */}
                    <div className={`${styles.overlay} absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <p className="text-orange-50 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center px-4">
                            {preview}
                        </p>
                    </div>

                </div>
            </Link>
            <div className={styles.text}>
                <h2>{title}</h2>
                <div className={styles.details}>
                    <div className={styles.author}>
                        <img
                            src={author.avatar.url}
                            alt={author.name}
                            className={styles.avatar}
                        />
                        <h3>{author.name}</h3>
                    </div>
                    <div className={styles.date}>
                        <h3>{datePublished}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

