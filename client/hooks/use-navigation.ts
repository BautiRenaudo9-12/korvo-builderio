import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = useCallback(() => navigate('/'), [navigate]);
  const goToWallet = useCallback(() => navigate('/wallet'), [navigate]);
  const goToExplore = useCallback(() => navigate('/explore'), [navigate]);
  const goToProfile = useCallback(() => navigate('/profile'), [navigate]);
  const goToActivity = useCallback(() => navigate('/activity'), [navigate]);
  const goToStoreDetail = useCallback((id: number) => navigate(`/store/${id}`), [navigate]);
  const goToAllBusinesses = useCallback(() => navigate('/businesses'), [navigate]);

  return {
    goToHome,
    goToWallet,
    goToExplore,
    goToProfile,
    goToActivity,
    goToStoreDetail,
    goToAllBusinesses,
  };
};
