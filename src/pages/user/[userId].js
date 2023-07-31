import { useRouter } from 'next/router';
import Profile from '../../components/Profile';

const UserProfilePage = () => {
  const router = useRouter();
  const { userId } = router.query;

  return <Profile username={userId} />;
};

export default UserProfilePage;
