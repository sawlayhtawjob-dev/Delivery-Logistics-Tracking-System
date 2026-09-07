import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h2>⚠️ တစ်ခုခု လွဲမှားနေပါသည် (Something went wrong)</h2>
          <p>ကျေးဇူးပြု၍ စာမျက်နှာကို Refresh လုပ်ပြီး ပြန်လည်စမ်းသပ်ပေးပါ။</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ padding: '10px 20px', cursor: 'pointer', background: '#0284c7', color: '#fff', border: 'none', borderRadius: '5px' }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;