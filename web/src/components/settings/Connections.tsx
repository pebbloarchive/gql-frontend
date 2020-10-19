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
        <title>@{current.username} | Connections</title>

            <div className={styles.content}>
                <h1 className={styles.title}>Connections</h1>

                    <div className={styles.connections_list}>
                        <button>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/746995343429730354/discord.png" alt="Discord Logo"/>
                        </button>
                        <button>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/746995519515262996/twitch.png" alt="Twitch Logo"/>
                        </button>
                        <button>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/746995816027389982/spotify.png" alt="Sptofy Logo"/>
                        </button>
                    </div>

                    <div className={styles.connections_items}>
                        <h1 className={styles.subtitle}>Active</h1>
                        {/* <button className={styles.connections_discord}>
                            <input type="text" name="" id="" defaultValue="andre#0069"/>
                        </button>
                        <button className={styles.connections_twitch}>
                            <input type="text" name="" id="" defaultValue="andre"/>
                        </button>
                        <button className={styles.connections_spotify}>
                            <input type="text" name="" id="" defaultValue="rocketlea"/>
                        </button> */}
                    </div>
            </div>
        </>
    )
}

export default Page;