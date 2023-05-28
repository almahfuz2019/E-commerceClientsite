import React, { useState } from 'react';
const DarkMode = () => {
     const[dark,setDark]=useState(false)
     return {dark,setDark}
};
export default DarkMode;