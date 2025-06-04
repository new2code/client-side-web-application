// Simple JavaScript for interactive features
let clickCount = 0;
let currentBackgroundIndex = 0;

// Background color variations
const backgroundClasses = ['', 'bg-variant-1', 'bg-variant-2', 'bg-variant-3', 'bg-variant-4'];

// Function to change background color
function changeBackgroundColor() {
    // Increment click counter
    clickCount++;
    document.getElementById('clickCounter').textContent = `Clicks: ${clickCount}`;
    
    // Remove current background class
    document.body.className = '';
    
    // Cycle through background variations
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundClasses.length;
    
    // Apply new background class
    if (backgroundClasses[currentBackgroundIndex]) {
        document.body.classList.add(backgroundClasses[currentBackgroundIndex]);
    }
    
    // Add a fun animation effect
    document.getElementById('colorButton').style.transform = 'scale(0.95)';
    setTimeout(() => {
        document.getElementById('colorButton').style.transform = '';
    }, 150);
}

// Welcome message when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Welcome to your first web app!');
    console.log('💡 Tip: Open the browser developer tools (F12) to see this message and experiment with the console!');
    
    // Add some console styling for fun
    console.log('%c🚀 Ready for development!', 'color: #667eea; font-size: 16px; font-weight: bold;');
    
    // Show a brief welcome animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Fun keyboard shortcut (press 'c' to change colors)
document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'c') {
        changeBackgroundColor();
    }
});

// Display current time (updates every second)
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    
    // Create time display if it doesn't exist
    if (!document.getElementById('currentTime')) {
        const timeDisplay = document.createElement('div');
        timeDisplay.id = 'currentTime';
        timeDisplay.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.9);
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            color: #4a5568;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        `;
        document.body.appendChild(timeDisplay);
    }
    
    document.getElementById('currentTime').textContent = `Current time: ${timeString}`;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call
