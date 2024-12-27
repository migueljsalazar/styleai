# FashionAI (React Prototype)

This repository contains a conceptual React prototype for the FashionAI app. The final production will be in Swift (iOS) and Kotlin (Android), but this Next.js + Tailwind scaffold demonstrates the core features and flows.

## Features

- **Onboarding & Profile Setup**  
  Collects user style preferences and mocks sign-up flows.

- **Outfit Scoring**  
  Upload a photo, get a mock AI-generated score (0–100), and view a short playful remark.

- **Suggestions & Chat**  
  Displays text-based improvements; ephemeral chat is available only if `isSubscribed` is set to `true`.

- **Subscription / Paywall**  
  A simple paywall using `isSubscribed` to toggle premium features.

- **Get Inspired Feed**  
  Curated images with “like” functionality to simulate user preference tracking.

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
