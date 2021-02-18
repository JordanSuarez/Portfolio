export default ({palette, cursor}) => ({
  cursor: {
    zIndex: 999,
    position: 'fixed',
    opacity: 1,
    pointerEvents: 'none',
    transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
  },
  cursorInner: {
    position: 'fixed',
    borderRadius: '50%',
    width: cursor.innerSize,
    height: cursor.innerSize,
    pointerEvents: 'none',
    backgroundColor: palette.lightRed,
    transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
  },
  cursorOuter: {
    position: 'fixed',
    borderRadius: '50%',
    pointerEvents: 'none',
    width: cursor.outerSize,
    height: cursor.outerSize,
    backgroundColor: `rgba(220, 90, 90, 0.4)`,
    transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
  },
})
