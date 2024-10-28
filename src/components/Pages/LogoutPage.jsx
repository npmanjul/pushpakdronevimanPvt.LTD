import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Store/auth';
import { toast } from 'react-toastify';

const LogoutPage = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();
    toast.success("Logged out successfully");
    navigate('/login');
  }, [logoutUser, navigate]);
  
  return null; // No need to return anything visible as it just logs out and redirects
}

export default LogoutPage;
