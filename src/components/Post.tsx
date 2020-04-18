import styles from '../styles/components/post.module.css';
import { PostInterface } from '../core/interfaces/post.interfaces';

const Post = (props: PostInterface) => {
  return (
    <div className={styles.feed_post}>
      <div className={styles.feed_profile}>
        <a href="">
          <img src="https://cdn.discordapp.com/avatars/583925649807245322/594e41061d36e0df49568be785543535.png?size=2048" alt="" className={styles.feed_avatar} />
          <div className={styles.feed_profile_info}>
            <h1 className={styles.feed_profile_username}> { props.author.username } </h1>
            <span className={styles.feed_profile_timeStamp}>{ props.created_at }</span>
          </div>
        </a>
      </div>
      <p className={styles.feed_caption}>
        { props.content }
      </p>
    </div>
  )
}

export default Post;