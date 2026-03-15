import ProfileHeader from '../components/ProfileHeader'
import SocialFooter from '../components/SocialFooter'

export default function ThisIsMe() {
    return (
        <>
            <ProfileHeader />

            <section className="max-w-md mx-auto mb-10 px-1">
                <p className="text-secondary text-center">
                    Content coming soon...
                </p>
            </section>

            <SocialFooter />
        </>
    )
}
