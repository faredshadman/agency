import { users } from "../data"
import Image from "next/Image"
import styles from "../styles/Testimonials.module.css"
import Circle from "./Circle"
const Testimonials = () => {
  return (
    <div className={styles.container}>
        <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0"/>
        <h1 className={styles.title}>Testimonials</h1>
        <div className={styles.wrapper}>
            {users.map(user=>(
                <div key={user.id} className={styles.card}>
                   <Image width="30" height="30" alt={user.title} src={`/img/${user.logo}`}/>
                   <p className={styles.comment}>
                       {user.comment}
                   </p>
                   <div className={styles.person}>
                       <Image className={styles.avatar} objectFit="cover" src={`/img/${user.avatar}`} alt={user.title} width="45" height="45" />
                        <div className={styles.info}>
                          <span className={styles.username}>{user.name}</span>
                          <span className={styles.jobtitle}>{user.title}</span>
                        </div>
                   </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials