import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Button.module.css'


export default function Button(props){
    return(
        <a href={props.linkTo} target="_blank">
            <button className={styles.button}>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
            </button>
        </a>
    );
}