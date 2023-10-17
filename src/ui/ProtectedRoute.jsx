import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Tải người dùng được xác thực
  const { isLoading, isAuthenticated } = useUser();

  //2. Nếu không có người dùng được xác thực chuyển hướng sang trang đăng nhập
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. Trong khi tải hiển thị spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //4. Nếu có người dùng hãy kết xuất ứng dụng

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
