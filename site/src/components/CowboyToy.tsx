import arthurFace from '../assets/arthur-face.jpg';

/**
 * Original toy-figure character (own silhouette, colors and details —
 * chunky wooden-toy proportions, solid-color vest, plain bandana, no
 * plaid/cow-print/star-boot branding) with Arthur's photo as the face.
 */
export function CowboyToy() {
  return (
    <div style={{ position: 'relative', width: 150, height: 218 }}>
      {/* contact shadow */}
      <div
        style={{
          position: 'absolute',
          bottom: -4,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 76,
          height: 14,
          borderRadius: '50%',
          background: 'rgba(74,46,23,.28)',
          filter: 'blur(1px)',
        }}
      />

      {/* hat crown */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 54,
          height: 34,
          borderRadius: '16px 16px 6px 6px',
          background: 'linear-gradient(160deg,#9a6236,#7c451f 55%,#5c3315)',
          border: '3px solid #5c3315',
          boxShadow: 'inset -4px -4px 0 rgba(0,0,0,.15), inset 3px 3px 0 rgba(255,255,255,.18)',
          zIndex: 3,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: -3,
            right: -3,
            bottom: 6,
            height: 6,
            background: '#e0503a',
            opacity: 0.85,
          }}
        />
      </div>
      {/* hat brim */}
      <div
        style={{
          position: 'absolute',
          top: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 98,
          height: 24,
          borderRadius: '50%',
          background: 'linear-gradient(180deg,#8a5530,#6b3c1f)',
          border: '3px solid #5c3315',
          boxShadow: '0 3px 0 rgba(74,46,23,.35)',
          zIndex: 2,
        }}
      />

      {/* head with Arthur's face */}
      <div
        style={{
          position: 'absolute',
          top: 34,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 64,
          height: 64,
          borderRadius: '50%',
          border: '4px solid #7c451f',
          backgroundImage: `url(${arthurFace})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: 'inset 0 -8px 14px rgba(0,0,0,.18), 0 3px 0 rgba(0,0,0,.15)',
          zIndex: 1,
        }}
      />
      {/* bandana */}
      <div
        style={{
          position: 'absolute',
          top: 92,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '15px solid transparent',
          borderRight: '15px solid transparent',
          borderTop: '18px solid #e0503a',
          zIndex: 1,
        }}
      />

      {/* left arm (hand on hip) — anchored at the torso's left shoulder point */}
      <div
        style={{
          position: 'absolute',
          top: 104,
          left: 43,
          width: 20,
          height: 40,
          transform: 'rotate(16deg)',
          transformOrigin: 'top center',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 20,
            height: 34,
            borderRadius: '10px',
            background: 'linear-gradient(200deg,#ffd766,#d98b2b)',
            border: '3px solid #7c451f',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -2,
            left: 2,
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: '#f2c9a3',
            border: '3px solid #7c451f',
          }}
        />
      </div>

      {/* right arm (waving) — anchored at the torso's right shoulder point */}
      <div
        style={{
          position: 'absolute',
          top: 104,
          left: 87,
          width: 20,
          height: 40,
          transformOrigin: 'top center',
          animation: 'wave 2.2s ease-in-out infinite',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 20,
            height: 34,
            borderRadius: '10px',
            background: 'linear-gradient(200deg,#ffd766,#d98b2b)',
            border: '3px solid #7c451f',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -2,
            left: 2,
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: '#f2c9a3',
            border: '3px solid #7c451f',
          }}
        />
      </div>

      {/* torso / vest */}
      <div
        style={{
          position: 'absolute',
          top: 100,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 62,
          height: 58,
          borderRadius: '20px 20px 16px 16px',
          background: 'linear-gradient(160deg,#ffd766,#f4b93b 55%,#d98b2b)',
          border: '3px solid #7c451f',
          boxShadow: 'inset -6px -6px 10px rgba(0,0,0,.14), inset 4px 4px 0 rgba(255,255,255,.25)',
          zIndex: 2,
        }}
      >
        {/* shirt collar */}
        <div
          style={{
            position: 'absolute',
            top: -3,
            left: 12,
            width: 0,
            height: 0,
            borderTop: '10px solid #fdf3d0',
            borderRight: '10px solid transparent',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -3,
            right: 12,
            width: 0,
            height: 0,
            borderTop: '10px solid #fdf3d0',
            borderLeft: '10px solid transparent',
          }}
        />
        {/* sheriff star badge */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 15,
            height: 15,
            background: '#fdf3d0',
            clipPath:
              'polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)',
            boxShadow: '0 1px 0 rgba(124,69,31,.5)',
          }}
        />
      </div>

      {/* belt */}
      <div
        style={{
          position: 'absolute',
          top: 156,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 58,
          height: 9,
          background: '#5c3315',
          borderRadius: 3,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -2,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 13,
            height: 13,
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 30%,#ffd766,#c99327)',
            border: '2px solid #7c451f',
          }}
        />
      </div>

      {/* legs */}
      <div
        style={{
          position: 'absolute',
          top: 162,
          left: '50%',
          transform: 'translateX(-27px)',
          width: 22,
          height: 42,
          borderRadius: '0 0 8px 8px',
          background: 'linear-gradient(180deg,#5f95c9,#3f8fd0)',
          border: '3px solid #2d6ea3',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 162,
          left: '50%',
          transform: 'translateX(5px)',
          width: 22,
          height: 42,
          borderRadius: '0 0 8px 8px',
          background: 'linear-gradient(180deg,#5f95c9,#3f8fd0)',
          border: '3px solid #2d6ea3',
        }}
      />

      {/* boots */}
      <div
        style={{
          position: 'absolute',
          top: 198,
          left: '50%',
          transform: 'translateX(-30px)',
          width: 28,
          height: 18,
          borderRadius: '8px 10px 10px 10px',
          background: 'linear-gradient(180deg,#9a6236,#7c451f)',
          border: '3px solid #5c3315',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 198,
          left: '50%',
          transform: 'translateX(2px)',
          width: 28,
          height: 18,
          borderRadius: '8px 10px 10px 10px',
          background: 'linear-gradient(180deg,#9a6236,#7c451f)',
          border: '3px solid #5c3315',
        }}
      />
    </div>
  );
}
