import * as React from 'react';
import styles from './Welcome.module.scss';
import type { IWelcomeProps } from './IWelcomeProps';

/**
 * Helper function to convert hex color to rgba with opacity
 * @param hex - Hex color string (e.g., #ffffff)
 * @param opacity - Opacity value from 0-100
 * @returns rgba color string
 */
const hexToRgba = (hex: string, opacity: number): string => {
  // Remove # if present
  const cleanHex = hex.replace('#', '');
  
  // Parse hex values
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  // Handle invalid hex
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return `rgba(255, 255, 255, ${opacity / 100})`;
  }
  
  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
};

/**
 * Welcome Component
 * Displays a personalized welcome message to the current user
 * with customizable styling options for site owners.
 * 
 * Acceptance Criteria Addressed:
 * - AC1: Displays current user's name
 * - AC2: Falls back to configurable message if name unavailable
 * - AC3: Customizable font color, size, bold, italic
 * - AC4: Customizable background color and opacity
 * - AC5: 8px 15px padding for visual comfort
 * - AC6: Renders immediately (no async operations)
 * - AC7: Responsive design via CSS
 */
const Welcome: React.FC<IWelcomeProps> = (props) => {
  const {
    userDisplayName,
    fallbackMessage,
    fontColor,
    fontSize,
    isBold,
    isItalic,
    backgroundColor,
    backgroundOpacity
  } = props;

  // AC1 & AC2: Determine the message to display
  // If user name is available, greet them by name; otherwise use fallback
  const hasUserName = userDisplayName && userDisplayName.trim().length > 0;
  const welcomeMessage = hasUserName
    ? `Welcome, ${userDisplayName}!`
    : fallbackMessage || 'Welcome to our site!';

  // AC3 & AC4: Build dynamic inline styles based on configured properties
  const messageBoxStyle: React.CSSProperties = {
    // AC4: Background color with opacity
    backgroundColor: hexToRgba(backgroundColor || '#ffffff', backgroundOpacity ?? 100),
    // AC5: Required padding for visual comfort
    padding: '8px 15px',
    // AC3: Font styling
    color: fontColor || '#333333',
    fontSize: `${fontSize || 24}px`,
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalic ? 'italic' : 'normal'
  };

  // AC6: Component renders immediately with no delays or async operations
  // AC7: Responsive container class applied via CSS module
  return (
    <div className={styles.welcomeContainer}>
      <div 
        className={styles.messageBox}
        style={messageBoxStyle}
        role="banner"
        aria-label="Welcome message"
      >
        <span className={styles.welcomeText}>
          {welcomeMessage}
        </span>
      </div>
    </div>
  );
};

export default Welcome;
