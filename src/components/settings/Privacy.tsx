import styles from '../../styles/components/settings.module.css';
import React from 'react';

interface Profile {
    profile: any;
}
class Profile extends React.Component {
    constructor(props: any) {
        super(props);
            this.profile = React.createRef();
    }

    render() {
        return (
            <div className={styles.content}>
                <h1 className={styles.settings_title}>Privacy &amp; Safety</h1>
                <h1 className={styles.content_note}>Check our <a href="">Privacy Policy</a> and <a href="">Terms of Service</a>.</h1>

            </div>
        )
    }
}

export default Profile;