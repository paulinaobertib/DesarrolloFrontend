import styles from './ListItem.module.css'

function ListItem(props: {text: string}) {
    return <li className={styles.item}>{props.text}</li>;
}
export default ListItem;