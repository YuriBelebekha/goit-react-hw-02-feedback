import React, { Component } from 'react';
import FeedbackSection from "./FeedbackSection";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    
    return (
      <>
        <FeedbackSection title="Please leave feedback" />
        
      </>
    );
  }
}

