import Navigation from './components/Navigation/Navigation';

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}