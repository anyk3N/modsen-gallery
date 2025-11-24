import { css, DefaultTheme } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  columnCenter: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  size: (value: string | number) => css`
    width: ${typeof value === 'number' ? `${value}px` : value};
    height: ${typeof value === 'number' ? `${value}px` : value};
  `,

  ellipsis: (lines = 1) =>
    lines === 1
      ? css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `
      : css`
          display: -webkit-box;
          -webkit-line-clamp: ${lines};
          -webkit-box-orient: vertical;
          overflow: hidden;
        `,

  visuallyHidden: css`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  `,

  transition: (props = 'all', duration = '200ms', timing = 'ease') => css`
    transition: ${props} ${duration} ${timing};
  `,

  imageCover: css`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  gradientBg: (theme: DefaultTheme, area: 'header' | 'footer' = 'header') => css`
    background: ${area === 'footer' ? theme.colors.footerBg : theme.colors.headerBg};
  `,

  backdrop: css`
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  `,

  container: (maxWidth = '909px') => css`
    max-width: ${maxWidth};
    margin: 40px auto;
    padding: 0 12px;
    width: 100%;
  `,

  mqMax: (theme: DefaultTheme, bp: keyof DefaultTheme['breakpoints'] | number) =>
    `@media (max-width: ${typeof bp === 'number' ? bp : theme.breakpoints[bp]}px)`,

  mqMin: (theme: DefaultTheme, bp: keyof DefaultTheme['breakpoints'] | number) =>
    `@media (min-width: ${typeof bp === 'number' ? bp : theme.breakpoints[bp]}px)`,
};

export default mixins;
