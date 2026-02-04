import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneSlider,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'WelcomeWebPartStrings';
import Welcome from './components/Welcome';
import { IWelcomeProps } from './components/IWelcomeProps';

export interface IWelcomeWebPartProps {
  fallbackMessage: string;
  fontColor: string;
  fontSize: number;
  isBold: boolean;
  isItalic: boolean;
  backgroundColor: string;
  backgroundOpacity: number;
}

export default class WelcomeWebPart extends BaseClientSideWebPart<IWelcomeWebPartProps> {

  public render(): void {
    // AC1: Retrieve current user's display name from page context
    // AC6: Display immediately on page load (synchronous access, no delay)
    const userDisplayName: string = this.context.pageContext.user.displayName;

    const element: React.ReactElement<IWelcomeProps> = React.createElement(
      Welcome,
      {
        userDisplayName: userDisplayName,
        fallbackMessage: this.properties.fallbackMessage,
        fontColor: this.properties.fontColor,
        fontSize: this.properties.fontSize,
        isBold: this.properties.isBold,
        isItalic: this.properties.isItalic,
        backgroundColor: this.properties.backgroundColor,
        backgroundOpacity: this.properties.backgroundOpacity
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.FallbackGroupName,
              groupFields: [
                // AC2: Fallback message for when user name cannot be retrieved
                PropertyPaneTextField('fallbackMessage', {
                  label: strings.FallbackMessageFieldLabel,
                  description: strings.FallbackMessageFieldDescription,
                  multiline: false,
                  maxLength: 200
                })
              ]
            },
            {
              groupName: strings.FontStyleGroupName,
              groupFields: [
                // AC3: Font color customization
                PropertyPaneTextField('fontColor', {
                  label: strings.FontColorFieldLabel,
                  description: strings.FontColorFieldDescription
                }),
                // AC3: Font size customization
                PropertyPaneSlider('fontSize', {
                  label: strings.FontSizeFieldLabel,
                  min: 12,
                  max: 72,
                  step: 1,
                  showValue: true
                }),
                // AC3: Bold setting
                PropertyPaneToggle('isBold', {
                  label: strings.IsBoldFieldLabel,
                  onText: strings.OnText,
                  offText: strings.OffText
                }),
                // AC3: Italic setting
                PropertyPaneToggle('isItalic', {
                  label: strings.IsItalicFieldLabel,
                  onText: strings.OnText,
                  offText: strings.OffText
                })
              ]
            },
            {
              groupName: strings.BackgroundGroupName,
              groupFields: [
                // AC4: Background color customization
                PropertyPaneTextField('backgroundColor', {
                  label: strings.BackgroundColorFieldLabel,
                  description: strings.BackgroundColorFieldDescription
                }),
                // AC4: Background opacity customization
                PropertyPaneSlider('backgroundOpacity', {
                  label: strings.BackgroundOpacityFieldLabel,
                  min: 0,
                  max: 100,
                  step: 5,
                  showValue: true
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
