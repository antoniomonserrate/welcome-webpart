declare interface IWelcomeWebPartStrings {
  // Property Pane
  PropertyPaneDescription: string;
  
  // Fallback Message Group
  FallbackGroupName: string;
  FallbackMessageFieldLabel: string;
  FallbackMessageFieldDescription: string;
  
  // Font Style Group
  FontStyleGroupName: string;
  FontColorFieldLabel: string;
  FontColorFieldDescription: string;
  FontSizeFieldLabel: string;
  IsBoldFieldLabel: string;
  IsItalicFieldLabel: string;
  
  // Background Group
  BackgroundGroupName: string;
  BackgroundColorFieldLabel: string;
  BackgroundColorFieldDescription: string;
  BackgroundOpacityFieldLabel: string;
  
  // Toggle Text
  OnText: string;
  OffText: string;
}

declare module 'WelcomeWebPartStrings' {
  const strings: IWelcomeWebPartStrings;
  export = strings;
}
