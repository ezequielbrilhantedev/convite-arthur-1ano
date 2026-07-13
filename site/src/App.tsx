import { Hero } from './components/Hero';
import { WhenWhere } from './components/WhenWhere';
import { Rsvp } from './components/Rsvp';
import { GiftSuggestion } from './components/GiftSuggestion';
import { Footer } from './components/Footer';
import { Soundtrack } from './components/Soundtrack';
import { useCountdown } from './hooks/useCountdown';

const PARTY_TARGET = new Date(2026, 8, 12, 16, 0, 0).getTime();

function App() {
  const countdown = useCountdown(PARTY_TARGET);

  return (
    <div
      className="mx-auto min-h-screen overflow-hidden"
      style={{ maxWidth: 480, background: '#fbf3e2', boxShadow: '0 0 60px rgba(0,0,0,.35)' }}
    >
      <Hero countdown={countdown} />
      <WhenWhere />
      <Rsvp />
      <GiftSuggestion />
      <Footer />
      <Soundtrack />
    </div>
  );
}

export default App;
