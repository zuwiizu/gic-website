# Setup Instructions for Global Insights Collective Website

## 🖼️ Logo Setup

1. **Save Ismail's photo** as `/public/team/ismail-warsame.jpg`
2. **Save the GIC logo** as `/public/logo.png`
3. **Save the globe icon** (optional) as `/public/logo-icon.png`

The website is already configured to use these file paths.

## 📺 YouTube Video Integration

### Current Video Placeholders
The website currently uses placeholder video IDs (`dQw4w9WgXcQ`). Replace these with actual video IDs from the Global Nomad channel:

**Files to update:**
- `app/speaking/page.tsx` (lines 100-115)
- `app/page.tsx` (line 34)

### How to get YouTube Video IDs:
1. Go to the video on YouTube
2. Copy the URL (e.g., `https://www.youtube.com/watch?v=ABC123DEF456`)
3. The video ID is the part after `v=` (e.g., `ABC123DEF456`)

### Example Update:
```typescript
const featuredVideos = [
  {
    id: "YOUR_ACTUAL_VIDEO_ID", // Replace this
    title: "Building Inclusive Communities: A Global Perspective",
    description: "Ismail Warsame discusses strategies for creating inclusive environments..."
  }
];
```

## 🎨 Visual Enhancements Completed

### ✅ Hero Section
- Added gradient background with floating elements
- Enhanced typography with gradient text effects
- Improved button styling with hover animations
- Better spacing and visual hierarchy

### ✅ Services Grid
- Added hover effects with gradient overlays
- Enhanced icon styling with gradients
- Improved card animations and shadows
- Better visual feedback on interaction

### ✅ Team Section
- Added comprehensive team member display
- Professional layout with credentials
- Expertise tags and LinkedIn integration
- Responsive design for all devices

### ✅ YouTube Integration
- Custom YouTube embed component with lazy loading
- Accessible video player with keyboard navigation
- Thumbnail preview with play button overlay
- Video grid and featured video layouts
- Integrated into Speaking & Media and Homepage

## 🚀 Next Steps

1. **Add Logo Files**: Save the logo and team photos to the specified paths
2. **Update Video IDs**: Replace placeholder video IDs with actual YouTube videos
3. **Test the Website**: Run `npm run dev` and verify all components work
4. **Content Review**: Update any placeholder content with real information
5. **Deploy**: Follow the deployment guide when ready

## 📱 Mobile Responsiveness

All enhancements maintain full mobile responsiveness:
- Touch-friendly interactions
- Optimized layouts for small screens
- Accessible navigation and controls
- Fast loading with optimized images

## ♿ Accessibility Maintained

All visual enhancements preserve accessibility:
- Proper color contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators and ARIA labels

The website is now ready for final content population and deployment!
