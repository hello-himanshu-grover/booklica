import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    primary: 'rgb(25, 118, 210)', // Brighter blue for better visual hierarchy
    onPrimary: 'rgb(255, 255, 255)', // White for clear contrast
    primaryContainer: 'rgb(227, 242, 253)', // Subtle blue tint for containers
    onPrimaryContainer: 'rgb(0, 57, 107)', // Dark blue for text on containers
    secondary: 'rgb(67, 160, 71)', // Vibrant green for secondary actions
    onSecondary: 'rgb(255, 255, 255)', // White text for contrast
    secondaryContainer: 'rgb(200, 230, 201)', // Soft green background
    onSecondaryContainer: 'rgb(13, 46, 13)', // Dark green text
    tertiary: 'rgb(239, 83, 80)', // Warm red for emphasis
    onTertiary: 'rgb(255, 255, 255)', // White text for contrast
    tertiaryContainer: 'rgb(255, 235, 234)', // Soft red background
    onTertiaryContainer: 'rgb(97, 0, 0)', // Deep red for text
    error: 'rgb(211, 47, 47)', // Standard error red
    onError: 'rgb(255, 255, 255)', // White for clarity
    errorContainer: 'rgb(255, 235, 238)', // Soft error background
    onErrorContainer: 'rgb(94, 0, 0)', // Dark red for text
    background: 'rgb(250, 250, 250)', // Off-white for reduced eye strain
    onBackground: 'rgb(33, 33, 33)', // Dark text for better readability
    surface: 'rgb(255, 255, 255)', // Pure white for surfaces
    onSurface: 'rgb(33, 33, 33)', // Dark text for clarity
    surfaceVariant: 'rgb(238, 238, 238)', // Light gray for subtle variation
    onSurfaceVariant: 'rgb(97, 97, 97)', // Medium gray for readable text
    outline: 'rgb(158, 158, 158)', // Neutral gray for outlines
    outlineVariant: 'rgb(224, 224, 224)', // Light gray for subtle outlines
    shadow: 'rgb(0, 0, 0)', // Black for shadows
    scrim: 'rgb(0, 0, 0)', // Black for dim overlays
    inverseSurface: 'rgb(50, 50, 50)', // Dark surface for contrast
    inverseOnSurface: 'rgb(240, 240, 240)', // Light text on dark surfaces
    inversePrimary: 'rgb(144, 202, 249)', // Softer blue for reverse contrast
    elevation: {
      level0: 'transparent', // No elevation
      level1: 'rgb(245, 245, 245)', // Subtle elevation
      level2: 'rgb(240, 240, 240)', // Slightly stronger
      level3: 'rgb(235, 235, 235)', // Medium elevation
      level4: 'rgb(230, 230, 230)', // Higher elevation
      level5: 'rgb(225, 225, 225)', // Highest elevation
    },
    surfaceDisabled: 'rgba(0, 0, 0, 0.12)', // Transparent black for disabled
    onSurfaceDisabled: 'rgba(0, 0, 0, 0.38)', // Faded text
    backdrop: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
    transparent: 'transparent', // Fully transparent for specific use cases
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    primary: 'rgb(144, 202, 249)', // Softer blue for dark themes
    onPrimary: 'rgb(0, 57, 107)', // Deep blue for text on primary
    primaryContainer: 'rgb(0, 57, 107)', // Dark blue background for containers
    onPrimaryContainer: 'rgb(227, 242, 253)', // Light blue text for contrast
    secondary: 'rgb(129, 199, 132)', // Muted green for secondary elements
    onSecondary: 'rgb(13, 46, 13)', // Dark green for text on secondary
    secondaryContainer: 'rgb(13, 46, 13)', // Dark green for containers
    onSecondaryContainer: 'rgb(200, 230, 201)', // Soft green for text
    tertiary: 'rgb(239, 154, 154)', // Warm pink for tertiary elements
    onTertiary: 'rgb(97, 0, 0)', // Deep red for text on tertiary
    tertiaryContainer: 'rgb(97, 0, 0)', // Dark red for containers
    onTertiaryContainer: 'rgb(255, 235, 234)', // Soft red for text
    error: 'rgb(255, 82, 82)', // Bright red for errors
    onError: 'rgb(94, 0, 0)', // Deep red for error text
    errorContainer: 'rgb(94, 0, 0)', // Dark red for error background
    onErrorContainer: 'rgb(255, 205, 210)', // Light pink for error text
    background: 'rgb(18, 18, 18)', // Very dark gray for the background
    onBackground: 'rgb(230, 230, 230)', // Light gray for text
    surface: 'rgb(24, 24, 24)', // Slightly lighter gray for surfaces
    onSurface: 'rgb(230, 230, 230)', // Light gray for text
    surfaceVariant: 'rgb(40, 40, 40)', // Medium gray for variants
    onSurfaceVariant: 'rgb(180, 180, 180)', // Softer gray for text
    outline: 'rgb(120, 120, 120)', // Neutral gray for outlines
    outlineVariant: 'rgb(60, 60, 60)', // Darker gray for subtle outlines
    shadow: 'rgb(0, 0, 0)', // Black for shadows
    scrim: 'rgba(0, 0, 0, 0.6)', // Semi-transparent overlay
    inverseSurface: 'rgb(230, 230, 230)', // Light surface for contrast
    inverseOnSurface: 'rgb(40, 40, 40)', // Dark text for inverse surfaces
    inversePrimary: 'rgb(25, 118, 210)', // Vibrant blue for reverse contrast
    elevation: {
      level0: 'transparent', // No elevation
      level1: 'rgb(28, 28, 28)', // Slightly lighter gray
      level2: 'rgb(32, 32, 32)', // Medium gray
      level3: 'rgb(36, 36, 36)', // Lighter gray
      level4: 'rgb(40, 40, 40)', // Higher elevation
      level5: 'rgb(44, 44, 44)', // Highest elevation
    },
    surfaceDisabled: 'rgba(230, 230, 230, 0.12)', // Transparent light gray for disabled elements
    onSurfaceDisabled: 'rgba(230, 230, 230, 0.38)', // Faded light gray for text
    backdrop: 'rgba(0, 0, 0, 0.8)', // Dark overlay for modals
    transparent: 'transparent', // Fully transparent for specific use cases
  },
};