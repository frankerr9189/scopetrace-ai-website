#!/bin/bash
# Fix Tailwind CSS pipeline - Clear caches and restart

echo "🧹 Clearing Next.js build cache..."
rm -rf .next

echo "📦 Clearing node_modules and reinstalling..."
rm -rf node_modules
rm -f package-lock.json

echo "⬇️  Installing dependencies..."
npm install

echo "✅ Done! Now run: npm run dev"
