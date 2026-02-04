/**
 * Props interface for the Welcome component
 * Maps to the web part properties and user context data
 */
export interface IWelcomeProps {
  /** Current user's display name from SharePoint context (AC1) */
  userDisplayName: string;
  
  /** Fallback message when user name is unavailable (AC2) */
  fallbackMessage: string;
  
  /** Font color for the welcome message (AC3) */
  fontColor: string;
  
  /** Font size in pixels for the welcome message (AC3) */
  fontSize: number;
  
  /** Whether the text should be bold (AC3) */
  isBold: boolean;
  
  /** Whether the text should be italic (AC3) */
  isItalic: boolean;
  
  /** Background color for the message box (AC4) */
  backgroundColor: string;
  
  /** Background opacity from 0-100 (AC4) */
  backgroundOpacity: number;
}
