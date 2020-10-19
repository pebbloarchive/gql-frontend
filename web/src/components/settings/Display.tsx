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
        <title>@{current.username} | Display</title>
        <div className={styles.content}>
            <h1 className={styles.title}>Display</h1>
                <div className={styles.setting}>


                    <h1 className={styles.title}>Appearance <span>SOON</span></h1>
                    <p className={styles.note}>Personalize the appearance of Pebblo.</p>
                        <div className={styles.appearance}>
                            <button className={styles.appearance_light}>
                                <span></span>
                            </button>
                            <button className={styles.appearance_dark}>
                                <span></span>
                            </button>
                            <button className={styles.appearance_dark_blue}>
                                <span></span>
                            </button>
                        </div>
                    <hr/>
                
                    <h1 className={styles.subtitle}>Warnings</h1>
                        <label className={styles.checkbox}>
                            <div className={styles.checkbox_container}>
                                <input type="checkbox" name="" id=""/>
                                <span className={styles.checkbox_box}></span>
                            </div>
                            <h1>Epilepsy warning</h1>
                            <p>Our AI will warn you if a post may trigger epilepsy.
                                <a href="">More Info.</a>
                            </p>
                    </label>


                </div>
        </div>
        </>
    )
}

export default Page;