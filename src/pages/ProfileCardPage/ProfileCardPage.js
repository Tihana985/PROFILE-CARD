
import styles from './ProfileCardPage.module.css';

export const ProfileCardPage = () => {

    return (
        <div className={styles.profilePage}>
            <div className={styles.cardContainer}>
                <img src='./img/profimg.png' alt='profileimg' className={styles.profileImg} />

                <div className={styles.cardContent}>
                    <div className={styles.personalInfo}>
                        <label className={styles.name}> Jessica Smith</label>
                        <label className={styles.prof}>JavaScript Developer</label>
                        <label className={styles.city}>New York, USA</label>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.info}>
                            <p>1598</p>
                            <span>Followers</span>
                        </div>
                        <div className={styles.info}>
                            <p>65</p>
                            <span>Following</span>
                        </div>
                        <div className={styles.info}>
                            <p>123</p>
                            <span>Articles</span>
                        </div>
                        <div className={styles.info}>
                            <p>80</p>
                            <span>Works</span>
                        </div>
                    </div>
                    <div className={styles.icons}>

                        <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" alt="fb-logo" className={styles.firstlink} />

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="ig-logo" className={styles.seclink} />

                        <img src="https://www.svgrepo.com/show/110195/linkedin.svg" alt="li-logo" className={styles.thirdlink} />

                        <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="github-logo" className={styles.fourlink} />

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/768px-Logo_of_Twitter.svg.png?20220821125553" alt="twiter-logo" className={styles.fiflink} />

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="whatsapp-logo" className={styles.sixlink} />


                        <img src="https://www.svgrepo.com/show/303552/google-g-2015-logo.svg" alt="gmail-logo" className={styles.sevlink} />

                    </div>
                    <div className={styles.twoBtn}>
                        <button className={styles.btnOne}>Message</button>
                        <button className={styles.btnTwo}>Follow</button>
                    </div>
                </div>

            </div>
        </div>


    )
}