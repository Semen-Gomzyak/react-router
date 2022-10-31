import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';


const Home = lazy(() => import('./pages/Home').then(module => ({...module, default: module.Home})));
const About = lazy(() => import('./pages/About').then(module => ({...module, default: module.About})));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ ...module, default: module.NotFound })));
const ProductDetails = lazy(() => import('./pages/ProductDetails').then(module => ({ ...module, default: module.ProductDetails })));
const Products = lazy(() => import('./pages/Products').then(module => ({ ...module, default: module.Products })));
const Mission = lazy(() => import('./AboutPage/Mission').then(module => ({ ...module, default: module.Mission })));
const Team = lazy(() => import('./AboutPage/Team').then(module => ({ ...module, default: module.Team })));
const Reviews = lazy(() => import('./AboutPage/Reviews').then(module => ({...module, default: module.Reviews})));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
