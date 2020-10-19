import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import { AccountBody } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import Link from 'next/link';
import styles from '../styles/settings/settings.module.css'

const Page = () => {
    const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current] = usePulse([core.accounts.collection.selectors.CURRENT]);
    return (
        <>
        <title>@{current.username} | Notifications</title>

            <div className={styles.content}>
                <h1 className={styles.title}>Notifications</h1>
                    <div className={styles.setting}>
                        
                        <h1 className={styles.subtitle}>Email Notifications</h1>
                            <label className={styles.checkbox}>
                                <div className={styles.checkbox_container}>
                                    <input type="checkbox" name="" id=""/>
                                    <span className={styles.checkbox_box}></span>
                                </div>
                                <h1>News Letters</h1>
                                <p>Keep up to date with Pebblo.</p>
                            </label>
                            <label className={styles.checkbox}>
                                <div className={styles.checkbox_container}>
                                    <input type="checkbox" name="" id=""/>
                                    <span className={styles.checkbox_box}></span>
                                </div>
                                <h1>Message Requests</h1>
                                <p>Get an email when someone has requested to message you.</p>
                            </label>

                        <hr/>
                        <h1 className={styles.subtitle}>Messages</h1>
                            <label className={styles.checkbox}>
                                <div className={styles.checkbox_container}>
                                    <input type="checkbox" name="" id=""/>
                                    <span className={styles.checkbox_box}></span>
                                </div>
                                <h1>Beep Boop</h1>
                                <p>Makes a sound when you get a new message from someone.</p>
                            </label>

                    </div>
            </div>
        </>
    )
}

export default Page;