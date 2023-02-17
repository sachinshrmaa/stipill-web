
import styles from 'src/styles/Profile.module.css'


const Profile = () => {
    return (  
        <main className={styles.profileSection}>
            
            <div className="col-md-8 m-auto">
                <div className="row my-md-5">
                    <div className="col-md-4 d-flex justify-content-md-center">
                        <img src="/img/default-profile.png" alt="default profile image" className={styles.profileImage} />
                    </div>
                    <div className="col-md-5 d-flex align-items-center">
                        <div>
                            <h4 class="h4 mb-0">Sachin Sharma</h4>
                            <small class="text-muted mt-0 mb-1">@sachinshrmaa</small>

                            <p class="mt-1 text-sm mb-1">Founder & CEO at Stipill </p>
                            <i class="fa fa-fw fa-external-link"></i> <a href="#" class="sm-0 mt-1" target="blank">sachinsblog.in </a> 
                        </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-center">
                        <div>
                            <a href="#" className='btn button px-4 py-2 mb-md-3 w-100'>Stip Creator</a>
                            <a href="#" className='btn button-outline px-4 py-2 w-100'>Edit Profile</a>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
 
export default Profile;