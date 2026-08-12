export default function Home() {
  return (
    <main style={{
      background: 'black',
      color: 'white',
      fontFamily: 'system-ui',
      minHeight: '100vh',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      
      {/* LOGO / TITLE */}
      <h1 style={{fontSize: '48px', margin: '0'}}>
        YBMM Nation 🚀
      </h1>
      <p style={{fontSize: '18px', color: '#aaa', marginTop: '10px'}}>
        The Home of Young Builders, Makers & Moguls
      </p>

      {/* ABOUT */}
      <div style={{maxWidth: '600px', margin: '60px auto'}}>
        <h2>About YBMM</h2>
        <p style={{lineHeight: '1.6', color: '#ccc'}}>
          YBMM Nation is a community for young Nigerians building the future. 
          We connect creators, entrepreneurs, and tech people to learn, build, 
          and grow together.
        </p>
      </div>

      {/* JOIN BUTTON */}
      <a href="#" style={{
        background: '#00ff88',
        color: 'black',
        padding: '16px 32px',
        borderRadius: '12px',
        fontSize: '18px',
        fontWeight: 'bold',
        textDecoration: 'none',
        display: 'inline-block'
      }}>
        Join The Nation 👇
      </a>

    </main>
  )
}
