# Welcome WebPart for SharePoint Online

A SharePoint Framework (SPFx) web part that displays a personalized welcome message to site visitors.

## Features

- **Personalized Greeting**: Automatically displays the current user's name (AC1)
- **Fallback Message**: Site owners can configure a fallback message for when user name is unavailable (AC2)
- **Text Customization**: Configure font color, size, bold, and italic settings (AC3)
- **Background Styling**: Customize background color and opacity (AC4)
- **Comfortable Padding**: Built-in 8px 15px padding for visual comfort (AC5)
- **Instant Display**: Message appears immediately on page load (AC6)
- **Responsive Design**: Adapts to different screen sizes and section widths (AC7)
- **SPFx 1.20.0**: Uses the latest supported version for SharePoint Online (AC8)

## Prerequisites

- Node.js v18.x (LTS)
- SharePoint Online tenant
- App Catalog site collection

## Getting Started

### Installation

1. Clone or download this project
2. Navigate to the project directory:

```bash
cd welcome-webpart
```

3. Install dependencies:

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run serve
```

This will open the SharePoint Workbench where you can test the web part.

### Build for Production

Bundle the solution:

```bash
npm run bundle
```

Package the solution:

```bash
npm run package
```

This creates a `.sppkg` file in the `sharepoint/solution` folder.

## Deployment

1. Upload the `.sppkg` file to your SharePoint App Catalog
2. Deploy the solution (trust it when prompted)
3. Add the web part to any SharePoint page

## Configuration Options

| Property | Description | Default |
|----------|-------------|---------|
| Fallback Message | Message shown when user name unavailable | "Welcome to our site!" |
| Font Color | Hex color code for text | #333333 |
| Font Size | Text size in pixels (12-72) | 24 |
| Bold | Enable bold text | Off |
| Italic | Enable italic text | Off |
| Background Color | Hex color code for background | #ffffff |
| Background Opacity | Opacity percentage (0-100) | 100 |

## Project Structure

```
welcome-webpart/
├── config/
│   ├── config.json
│   ├── deploy-azure-storage.json
│   ├── package-solution.json
│   ├── serve.json
│   └── write-manifests.json
├── src/
│   └── webparts/
│       └── welcome/
│           ├── components/
│           │   ├── IWelcomeProps.ts
│           │   ├── Welcome.module.scss
│           │   └── Welcome.tsx
│           ├── loc/
│           │   ├── en-us.js
│           │   └── mystrings.d.ts
│           ├── WelcomeWebPart.manifest.json
│           └── WelcomeWebPart.ts
├── .yo-rc.json
├── gulpfile.js
├── package.json
├── README.md
└── tsconfig.json
```

## Acceptance Criteria Mapping

| AC | Requirement | Implementation |
|----|-------------|----------------|
| AC1 | Display current user's name | `this.context.pageContext.user.displayName` |
| AC2 | Fallback message | Property pane text field |
| AC3 | Font customization | Color, size, bold, italic properties |
| AC4 | Background customization | Color and opacity properties |
| AC5 | 8px 15px padding | Inline styles in component |
| AC6 | Immediate display | Synchronous rendering, no async |
| AC7 | Responsive design | CSS media queries, flexbox |
| AC8 | Latest SPFx version | SPFx 1.20.0 |

## Browser Support

- Microsoft Edge (Chromium)
- Google Chrome
- Mozilla Firefox
- Safari

## License

MIT
