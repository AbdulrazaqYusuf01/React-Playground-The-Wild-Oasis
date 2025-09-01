/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the user data
  const { isLoading, isAuthenticated } = useUser();

  // 2. Check if the user is authenticated, if not, redirect to the login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. Check if isLoading and render spinner
  if (isLoading)
    return (
      <Fullpage>
        <Spinner />;
      </Fullpage>
    );

  // 4. if !isLoading, return the children
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
