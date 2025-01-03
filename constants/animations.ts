export const menuAnimations = {
  menu: {
    hidden: { 
      height: 0, 
      opacity: 0, 
      y: -20 
    },
    visible: { 
      height: "100vh", 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    },
    exit: { 
      height: 0, 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  },
  item: {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      x: -20 
    }
  },
  submenu: {
    hidden: { 
      height: 0, 
      opacity: 0 
    },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    },
    exit: { 
      height: 0, 
      opacity: 0 
    }
  }
}; 