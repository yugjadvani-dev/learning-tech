import { Navigate, Route, Routes } from "react-router-dom";

import EmailVerificationPage from "./pages/EmailVerificationPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import SignUpPage from "./pages/SignUpPage";

import LoadingSpinner from "./components/LoadingSpinner";

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";

import AboutUsDesktop from "./pages/AboutUsDesktop";
import BurialInsurancePlansDesktop from "./pages/BurialInsurancePlansDesktop";
import ContactUsDesktop from "./pages/ContactUsDesktop";
import HomepageDesktop from "./pages/HomepageDesktop";
import LifeInsuranceDesktop from "./pages/LifeInsuranceDesktop";
import MedicareHealthPlansDesktop from "./pages/MedicareHealthPlansDesktop";
import OffMarketplaceDesktop from "./pages/OffMarketplaceDesktop";
import OnMarketplaceDesktop from "./pages/OnMarketplaceDesktop";
import PrivacyPolicyDesktop from "./pages/PrivacyPolicyDesktop";
import VisionAndDentalDesktop from "./pages/VisionAndDentalDesktop";
// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};

function App() {
	const { isCheckingAuth, checkAuth } = useAuthStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isCheckingAuth) return <LoadingSpinner />;

	return (
		<div>
			{/* <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			<FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} /> */}

			<Routes>
				{/* <Route
					path='/'
					element={
						<ProtectedRoute>
							<DashboardPage />
						</ProtectedRoute>
					}
				/> */}
				{/* new */}
				<Route path="/" element={
					<ProtectedRoute>
						<HomepageDesktop />
						</ProtectedRoute>
						} />
				<Route path="/about" element={<AboutUsDesktop />} />
				<Route
					path="/on-marketplace"
					element={<OnMarketplaceDesktop />}
				/>
				<Route
					path="/vision-and-dental"
					element={<VisionAndDentalDesktop />}
				/>
				<Route
					path="/life-insurance"
					element={<LifeInsuranceDesktop />}
				/>
				<Route
					path="/medicare-health-plans"
					element={<MedicareHealthPlansDesktop />}
				/>
				<Route
					path="/burial-insurance-plans"
					element={<BurialInsurancePlansDesktop />}
				/>
				<Route path="/contact-us" element={<ContactUsDesktop />} />
				<Route
					path="/off-marketplace"
					element={<OffMarketplaceDesktop />}
				/>
				<Route
					path="/privacy-policy"
					element={<PrivacyPolicyDesktop />}
				/>
				{/* new close */}
				<Route
					path='/signup'
					element={
						<RedirectAuthenticatedUser>
							<SignUpPage />
						</RedirectAuthenticatedUser>
					}
				/>
				<Route
					path='/login'
					element={
						<RedirectAuthenticatedUser>
							<LoginPage />
						</RedirectAuthenticatedUser>
					}
				/>
				<Route path='/verify-email' element={<EmailVerificationPage />} />
				<Route
					path='/forgot-password'
					element={
						<RedirectAuthenticatedUser>
							<ForgotPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>

				<Route
					path='/reset-password/:token'
					element={
						<RedirectAuthenticatedUser>
							<ResetPasswordPage />
						</RedirectAuthenticatedUser>
					}
				/>
				{/* catch all routes */}
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
